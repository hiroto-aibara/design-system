import * as react from 'react';
import react__default, { ButtonHTMLAttributes, ReactNode, InputHTMLAttributes, HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes, CSSProperties, OptionHTMLAttributes, SelectHTMLAttributes } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'accent';
type ButtonSize = 'sm' | 'md' | 'lg';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** ボタンのスタイルバリアント */
    variant?: ButtonVariant;
    /** ボタンのサイズ */
    size?: ButtonSize;
    /** ローディング状態 */
    isLoading?: boolean;
    /** アイコン（左側） */
    leftIcon?: ReactNode;
    /** アイコン（右側） */
    rightIcon?: ReactNode;
    /** 子要素 */
    children: ReactNode;
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

type InputSize = 'sm' | 'md' | 'lg';
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** インプットのサイズ */
    size?: InputSize;
    /** エラー状態 */
    isInvalid?: boolean;
    /** アイコン（左側） */
    leftIcon?: ReactNode;
    /** アイコン（右側） */
    rightIcon?: ReactNode;
}
declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

type CardPadding = 'none' | 'sm' | 'md' | 'lg';
interface CardProps extends HTMLAttributes<HTMLDivElement> {
    /** カードのパディング */
    padding?: CardPadding;
    /** 影を付けるか */
    shadow?: boolean;
    /** ボーダーを付けるか */
    bordered?: boolean;
    /** 子要素 */
    children: ReactNode;
}
declare const Card: react.ForwardRefExoticComponent<CardProps & react.RefAttributes<HTMLDivElement>>;
interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
declare const CardHeader: react.ForwardRefExoticComponent<CardHeaderProps & react.RefAttributes<HTMLDivElement>>;
interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
declare const CardBody: react.ForwardRefExoticComponent<CardBodyProps & react.RefAttributes<HTMLDivElement>>;
interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
declare const CardFooter: react.ForwardRefExoticComponent<CardFooterProps & react.RefAttributes<HTMLDivElement>>;

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    /** Heading level (h1-h5) */
    level: HeadingLevel;
    /** Remove default margins */
    noMargin?: boolean;
    /** Left-align the heading (default is centered) */
    leftAlign?: boolean;
    children: ReactNode;
}
declare const Heading: react__default.ForwardRefExoticComponent<HeadingProps & react__default.RefAttributes<HTMLHeadingElement>>;

type ContainerMaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    /** Maximum width of the container (preset or custom value) */
    maxWidth?: ContainerMaxWidth;
    /** Width as ratio/percentage (e.g., '80%', '90%') - overrides maxWidth */
    width?: string;
    /** Horizontal padding */
    padding?: boolean;
    children: ReactNode;
}
declare const Container: react.ForwardRefExoticComponent<ContainerProps & react.RefAttributes<HTMLDivElement>>;

interface AppShellProps {
    /** Global navigation component */
    nav?: ReactNode;
    /** Sidebar component */
    sidebar?: ReactNode;
    /** Footer component */
    footer?: ReactNode;
    /** Sidebar width (default: 260px) */
    sidebarWidth?: string;
    /** Nav height for sticky sidebar calculation (default: 60px) */
    navHeight?: string;
    /** Main content */
    children: ReactNode;
    /** Additional className */
    className?: string;
}
declare const AppShell: react__default.FC<AppShellProps>;

interface GlobalNavProps {
    children?: react__default.ReactNode;
    /** Logo/brand area content */
    logo?: react__default.ReactNode;
    /** Navigation items */
    navigation?: react__default.ReactNode;
    /** Right side actions (buttons, icons, etc.) */
    actions?: react__default.ReactNode;
    /** Additional className for customization */
    className?: string;
}
declare const GlobalNav: react__default.FC<GlobalNavProps>;
interface NavItemProps {
    children: react__default.ReactNode;
    isActive?: boolean;
    onClick?: () => void;
    className?: string;
}
declare const NavItem: react__default.FC<NavItemProps>;
interface NavLogoProps {
    children?: react__default.ReactNode;
    icon?: react__default.ReactNode;
    title?: string;
    className?: string;
}
declare const NavLogo: react__default.FC<NavLogoProps>;

interface SidebarProps {
    children?: react__default.ReactNode;
    /** Width of the sidebar (default: 256px / 16rem) */
    width?: string;
    /** Additional className for customization */
    className?: string;
}
declare const Sidebar: react__default.FC<SidebarProps>;
interface SidebarSectionProps {
    children?: react__default.ReactNode;
    title?: string;
    className?: string;
}
declare const SidebarSection: react__default.FC<SidebarSectionProps>;
interface SidebarItemProps {
    children: react__default.ReactNode;
    icon?: react__default.ReactNode;
    isActive?: boolean;
    href?: string;
    onClick?: () => void;
    className?: string;
}
declare const SidebarItem: react__default.FC<SidebarItemProps>;

interface FooterProps {
    children?: react__default.ReactNode;
    /** Left side content (e.g., copyright) */
    left?: react__default.ReactNode;
    /** Right side content (e.g., social links) */
    right?: react__default.ReactNode;
    /** Additional className for customization */
    className?: string;
}
declare const Footer: react__default.FC<FooterProps>;
interface FooterLinkProps {
    children: react__default.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
}
declare const FooterLink: react__default.FC<FooterLinkProps>;

type TableSize = 'sm' | 'md' | 'lg';
interface TableProps extends HTMLAttributes<HTMLTableElement> {
    /** テーブルのサイズ */
    size?: TableSize;
    /** 縞模様を表示 */
    striped?: boolean;
    /** ホバー効果を有効化 */
    hoverable?: boolean;
    /** ボーダーを表示 */
    bordered?: boolean;
    /** 子要素 */
    children: ReactNode;
}
declare const Table: react.ForwardRefExoticComponent<TableProps & react.RefAttributes<HTMLTableElement>>;
interface TheadProps extends HTMLAttributes<HTMLTableSectionElement> {
    children: ReactNode;
}
declare const Thead: react.ForwardRefExoticComponent<TheadProps & react.RefAttributes<HTMLTableSectionElement>>;
interface TbodyProps extends HTMLAttributes<HTMLTableSectionElement> {
    children: ReactNode;
}
declare const Tbody: react.ForwardRefExoticComponent<TbodyProps & react.RefAttributes<HTMLTableSectionElement>>;
interface TfootProps extends HTMLAttributes<HTMLTableSectionElement> {
    children: ReactNode;
}
declare const Tfoot: react.ForwardRefExoticComponent<TfootProps & react.RefAttributes<HTMLTableSectionElement>>;
interface TrProps extends HTMLAttributes<HTMLTableRowElement> {
    children: ReactNode;
}
declare const Tr: react.ForwardRefExoticComponent<TrProps & react.RefAttributes<HTMLTableRowElement>>;
interface ThProps extends ThHTMLAttributes<HTMLTableCellElement> {
    children?: ReactNode;
}
declare const Th: react.ForwardRefExoticComponent<ThProps & react.RefAttributes<HTMLTableCellElement>>;
interface TdProps extends TdHTMLAttributes<HTMLTableCellElement> {
    children?: ReactNode;
}
declare const Td: react.ForwardRefExoticComponent<TdProps & react.RefAttributes<HTMLTableCellElement>>;

type ChartColor = 'primary' | 'accent' | 'success' | 'warning' | 'danger';
type AnimationEasing = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
interface AnimationConfig {
    /** アニメーションを有効化 */
    enabled?: boolean;
    /** アニメーション時間 (ms) */
    duration?: number;
    /** イージング関数 */
    easing?: AnimationEasing;
    /** 順次アニメーション（Bar/Pieで各要素を順番に表示） */
    staggered?: boolean;
    /** 順次アニメーションの遅延間隔 (ms) */
    staggerDelay?: number;
}
interface BaseChartProps<T = Record<string, unknown>> {
    /** データ配列 */
    data: T[];
    /** チャートの幅 */
    width?: number | `${number}%`;
    /** チャートの高さ */
    height?: number;
    /** カラーテーマ */
    color?: ChartColor;
    /** アニメーションを有効化（簡易設定、詳細はanimationConfigを使用） */
    animate?: boolean;
    /** アニメーション詳細設定 */
    animationConfig?: AnimationConfig;
    /** ホバーエフェクトを有効化 */
    hoverEffect?: boolean;
    /** グリッドを表示 */
    showGrid?: boolean;
    /** 凡例を表示 */
    showLegend?: boolean;
    /** ツールチップを表示 */
    showTooltip?: boolean;
    /** カスタムクラス名 */
    className?: string;
    /** カスタムスタイル */
    style?: CSSProperties;
}
/**
 * デフォルトのアニメーション設定
 */
declare const defaultAnimationConfig: Required<AnimationConfig>;
/**
 * CSS変数からカラー値を取得するユーティリティ
 */
declare const getChartColor: (color: ChartColor) => string;
/**
 * チャートのカラーパレットを生成
 */
declare const getChartColors: () => string[];

interface LineChartProps<T = Record<string, unknown>> extends BaseChartProps<T> {
    /** X軸のデータキー */
    xKey: keyof T & string;
    /** Y軸のデータキー */
    yKey: keyof T & string;
    /** 曲線を滑らかにする */
    smooth?: boolean;
    /** ドットを表示 */
    showDots?: boolean;
}
declare function LineChart<T extends Record<string, unknown>>({ data, xKey, yKey, width, height, color, animate, animationConfig, hoverEffect, showGrid, showLegend, showTooltip, smooth, showDots, className, style, }: LineChartProps<T>): react_jsx_runtime.JSX.Element;
declare namespace LineChart {
    var displayName: string;
}

interface BarChartProps<T = Record<string, unknown>> extends BaseChartProps<T> {
    /** X軸のデータキー */
    xKey: keyof T & string;
    /** Y軸のデータキー */
    yKey: keyof T & string;
    /** バーの角丸 */
    radius?: number;
    /** バーの最大幅 */
    barSize?: number;
}
declare function BarChart<T extends Record<string, unknown>>({ data, xKey, yKey, width, height, color, animate, animationConfig, hoverEffect, showGrid, showLegend, showTooltip, radius, barSize, className, style, }: BarChartProps<T>): react_jsx_runtime.JSX.Element;
declare namespace BarChart {
    var displayName: string;
}

interface PieChartProps<T = Record<string, unknown>> extends BaseChartProps<T> {
    /** ラベル名のデータキー */
    nameKey: keyof T & string;
    /** 値のデータキー */
    valueKey: keyof T & string;
    /** 内側の半径（ドーナツチャート用） */
    innerRadius?: number;
    /** 外側の半径 */
    outerRadius?: number;
    /** ラベルを表示 */
    showLabels?: boolean;
}
declare function PieChart<T extends Record<string, unknown>>({ data, nameKey, valueKey, width, height, animate, animationConfig, hoverEffect, showLegend, showTooltip, innerRadius, outerRadius, showLabels, className, style, }: PieChartProps<T>): react_jsx_runtime.JSX.Element;
declare namespace PieChart {
    var displayName: string;
}

interface AreaChartProps<T = Record<string, unknown>> extends BaseChartProps<T> {
    /** X軸のデータキー */
    xKey: keyof T & string;
    /** Y軸のデータキー */
    yKey: keyof T & string;
    /** 曲線を滑らかにする */
    smooth?: boolean;
    /** グラデーションを有効化 */
    gradient?: boolean;
}
declare function AreaChart<T extends Record<string, unknown>>({ data, xKey, yKey, width, height, color, animate, animationConfig, hoverEffect, showGrid, showLegend, showTooltip, smooth, gradient, className, style, }: AreaChartProps<T>): react_jsx_runtime.JSX.Element;
declare namespace AreaChart {
    var displayName: string;
}

type SelectSize = 'sm' | 'md' | 'lg';
interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
    /** セレクトのサイズ */
    size?: SelectSize;
    /** エラー状態 */
    isInvalid?: boolean;
    /** プレースホルダー */
    placeholder?: string;
    /** 子要素（Option） */
    children: ReactNode;
}
declare const Select: react.ForwardRefExoticComponent<SelectProps & react.RefAttributes<HTMLSelectElement>>;
interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
    children: ReactNode;
}
declare const Option: react.ForwardRefExoticComponent<OptionProps & react.RefAttributes<HTMLOptionElement>>;

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    /** エラー状態 */
    isInvalid?: boolean;
    /** ラベル */
    children?: ReactNode;
}
declare const Checkbox: react.ForwardRefExoticComponent<CheckboxProps & react.RefAttributes<HTMLInputElement>>;

interface RadioGroupProps {
    /** グループ名 */
    name: string;
    /** 選択値（制御モード） */
    value?: string;
    /** 初期選択値（非制御モード） */
    defaultValue?: string;
    /** 変更ハンドラー */
    onChange?: (value: string) => void;
    /** 無効状態 */
    disabled?: boolean;
    /** 子要素（Radio） */
    children: ReactNode;
    /** カスタムクラス名 */
    className?: string;
}
declare const RadioGroup: react.ForwardRefExoticComponent<RadioGroupProps & react.RefAttributes<HTMLDivElement>>;
interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
    /** 値 */
    value: string;
    /** ラベル */
    children?: ReactNode;
    /** 変更ハンドラー（RadioGroup外で使用時） */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Radio: react.ForwardRefExoticComponent<RadioProps & react.RefAttributes<HTMLInputElement>>;

type ModalSize = 'sm' | 'md' | 'lg';
interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    /** モーダルの表示状態 */
    isOpen: boolean;
    /** 閉じるハンドラー */
    onClose: () => void;
    /** タイトル */
    title?: string;
    /** サイズ */
    size?: ModalSize;
    /** オーバーレイクリックで閉じるか */
    closeOnOverlayClick?: boolean;
    /** ESCキーで閉じるか */
    closeOnEsc?: boolean;
    /** 子要素 */
    children: ReactNode;
}
declare const Modal: react.ForwardRefExoticComponent<ModalProps & react.RefAttributes<HTMLDivElement>>;
interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
declare const ModalFooter: react.ForwardRefExoticComponent<ModalFooterProps & react.RefAttributes<HTMLDivElement>>;

type ToastVariant = 'info' | 'success' | 'warning' | 'error';
interface ToastProps extends HTMLAttributes<HTMLDivElement> {
    /** メッセージ */
    message: string;
    /** バリアント */
    variant?: ToastVariant;
    /** 閉じるボタンを表示 */
    closable?: boolean;
    /** 閉じるハンドラー */
    onClose?: () => void;
}
declare const Toast: react.ForwardRefExoticComponent<ToastProps & react.RefAttributes<HTMLDivElement>>;

interface ToastOptions {
    /** メッセージ */
    message: string;
    /** バリアント */
    variant?: ToastVariant;
    /** 表示時間（ms）、0で自動消去なし */
    duration?: number;
    /** 閉じるボタンを表示 */
    closable?: boolean;
}
interface ToastContextValue {
    toast: (options: ToastOptions) => void;
    removeToast: (id: string) => void;
}
interface ToastProviderProps {
    children: ReactNode;
    /** デフォルトの表示時間（ms） */
    defaultDuration?: number;
    /** 最大表示数 */
    maxToasts?: number;
}
declare const ToastProvider: {
    ({ children, defaultDuration, maxToasts, }: ToastProviderProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const useToast: () => ToastContextValue;

export { type AnimationConfig, type AnimationEasing, AppShell, type AppShellProps, AreaChart, type AreaChartProps, BarChart, type BarChartProps, type BaseChartProps, Button, type ButtonProps, type ButtonSize, type ButtonVariant, Card, CardBody, type CardBodyProps, CardFooter, type CardFooterProps, CardHeader, type CardHeaderProps, type CardPadding, type CardProps, type ChartColor, Checkbox, type CheckboxProps, Container, type ContainerMaxWidth, type ContainerProps, Footer, FooterLink, type FooterLinkProps, type FooterProps, GlobalNav, type GlobalNavProps, Heading, type HeadingLevel, type HeadingProps, Input, type InputProps, type InputSize, LineChart, type LineChartProps, Modal, ModalFooter, type ModalFooterProps, type ModalProps, type ModalSize, NavItem, type NavItemProps, NavLogo, type NavLogoProps, Option, type OptionProps, PieChart, type PieChartProps, Radio, RadioGroup, type RadioGroupProps, type RadioProps, Select, type SelectProps, type SelectSize, Sidebar, SidebarItem, type SidebarItemProps, type SidebarProps, SidebarSection, type SidebarSectionProps, Table, type TableProps, type TableSize, Tbody, type TbodyProps, Td, type TdProps, Tfoot, type TfootProps, Th, type ThProps, Thead, type TheadProps, Toast, type ToastOptions, type ToastProps, ToastProvider, type ToastProviderProps, type ToastVariant, Tr, type TrProps, defaultAnimationConfig, getChartColor, getChartColors, useToast };
