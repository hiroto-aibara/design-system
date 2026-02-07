#!/usr/bin/env bash
#
# CSS依存宣言チェック
#
# パッケージのビルド出力 (dist/index.css) が @ds/tokens の CSS Variables を
# 使用している場合、先頭で @import '@ds/tokens' が宣言されていることを検証する。
#
# Usage: scripts/check-css-deps.sh
# CI の build ジョブ内で pnpm build の後に実行される。

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
EXIT_CODE=0

for css_file in "$REPO_ROOT"/packages/*/dist/index.css; do
  [ -f "$css_file" ] || continue

  pkg_dir="$(dirname "$(dirname "$css_file")")"
  pkg_name="$(basename "$pkg_dir")"

  # tokens パッケージ自身はチェック対象外
  if [ "$pkg_name" = "tokens" ]; then
    continue
  fi

  # CSS Variables (var(--color-*, var(--spacing-* 等) を使用しているか確認
  if ! grep -q 'var(--' "$css_file"; then
    continue
  fi

  # 先頭行が @import '@ds/tokens' であることを検証
  first_line="$(head -n 1 "$css_file")"
  if ! echo "$first_line" | grep -q "@import '@ds/tokens'"; then
    echo "ERROR: $css_file uses CSS Variables but does not declare @import '@ds/tokens' at the top."
    echo "  Found first line: $first_line"
    echo "  Expected: @import '@ds/tokens';"
    echo ""
    echo "  Fix: Add css banner to the package's tsup.config.ts:"
    echo '    banner: { css: "@import '"'"'@ds/tokens'"'"';" }'
    EXIT_CODE=1
  fi
done

if [ "$EXIT_CODE" -eq 0 ]; then
  echo "CSS dependency check passed."
fi

exit $EXIT_CODE
