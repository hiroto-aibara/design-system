// src/Button/Button.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Button = forwardRef(
  ({
    variant = "primary",
    size = "md",
    isLoading = false,
    disabled,
    leftIcon,
    rightIcon,
    children,
    className,
    ...props
  }, ref) => {
    const isDisabled = disabled || isLoading;
    return /* @__PURE__ */ jsxs(
      "button",
      {
        ref,
        className: `ds-button ds-button--${variant} ds-button--${size} ${className || ""}`,
        disabled: isDisabled,
        "aria-busy": isLoading,
        ...props,
        children: [
          isLoading && /* @__PURE__ */ jsx("span", { className: "ds-button__spinner", "aria-hidden": "true", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "none", className: "ds-button__spinner-icon", children: /* @__PURE__ */ jsx(
            "circle",
            {
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              strokeWidth: "3",
              strokeLinecap: "round",
              strokeDasharray: "31.4 31.4"
            }
          ) }) }),
          !isLoading && leftIcon && /* @__PURE__ */ jsx("span", { className: "ds-button__icon ds-button__icon--left", children: leftIcon }),
          /* @__PURE__ */ jsx("span", { className: "ds-button__label", children }),
          !isLoading && rightIcon && /* @__PURE__ */ jsx("span", { className: "ds-button__icon ds-button__icon--right", children: rightIcon })
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/Input/Input.tsx
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var Input = forwardRef2(
  ({
    size = "md",
    isInvalid = false,
    disabled,
    leftIcon,
    rightIcon,
    className,
    ...props
  }, ref) => {
    const hasLeftIcon = !!leftIcon;
    const hasRightIcon = !!rightIcon;
    return /* @__PURE__ */ jsxs2(
      "div",
      {
        className: `ds-input-wrapper ds-input-wrapper--${size} ${isInvalid ? "ds-input-wrapper--invalid" : ""} ${disabled ? "ds-input-wrapper--disabled" : ""} ${className || ""}`,
        children: [
          leftIcon && /* @__PURE__ */ jsx2("span", { className: "ds-input__icon ds-input__icon--left", children: leftIcon }),
          /* @__PURE__ */ jsx2(
            "input",
            {
              ref,
              className: `ds-input ${hasLeftIcon ? "ds-input--has-left-icon" : ""} ${hasRightIcon ? "ds-input--has-right-icon" : ""}`,
              disabled,
              "aria-invalid": isInvalid,
              ...props
            }
          ),
          rightIcon && /* @__PURE__ */ jsx2("span", { className: "ds-input__icon ds-input__icon--right", children: rightIcon })
        ]
      }
    );
  }
);
Input.displayName = "Input";

// src/Card/Card.tsx
import { forwardRef as forwardRef3 } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var Card = forwardRef3(
  ({
    padding = "md",
    shadow = true,
    bordered = false,
    children,
    className,
    ...props
  }, ref) => {
    const classes = [
      "ds-card",
      `ds-card--padding-${padding}`,
      shadow && "ds-card--shadow",
      bordered && "ds-card--bordered",
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx3("div", { ref, className: classes, ...props, children });
  }
);
Card.displayName = "Card";
var CardHeader = forwardRef3(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx3(
      "div",
      {
        ref,
        className: `ds-card__header ${className || ""}`,
        ...props,
        children
      }
    );
  }
);
CardHeader.displayName = "CardHeader";
var CardBody = forwardRef3(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx3("div", { ref, className: `ds-card__body ${className || ""}`, ...props, children });
  }
);
CardBody.displayName = "CardBody";
var CardFooter = forwardRef3(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx3(
      "div",
      {
        ref,
        className: `ds-card__footer ${className || ""}`,
        ...props,
        children
      }
    );
  }
);
CardFooter.displayName = "CardFooter";

// src/Heading/Heading.tsx
import { forwardRef as forwardRef4 } from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var Heading = forwardRef4(
  ({ level, noMargin = false, leftAlign = false, className = "", children, ...props }, ref) => {
    const Tag = level;
    const classes = [
      "ds-heading",
      `ds-heading--${level}`,
      noMargin && "ds-heading--no-margin",
      leftAlign && "ds-heading--left",
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx4(Tag, { ref, className: classes, ...props, children });
  }
);
Heading.displayName = "Heading";

// src/Container/Container.tsx
import { forwardRef as forwardRef5 } from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var Container = forwardRef5(
  ({ maxWidth = "lg", width, padding = true, className = "", style, children, ...props }, ref) => {
    const classes = [
      "ds-container",
      !width && `ds-container--${maxWidth}`,
      padding && "ds-container--padded",
      className
    ].filter(Boolean).join(" ");
    const containerStyle = width ? { ...style, width, maxWidth: width } : style;
    return /* @__PURE__ */ jsx5("div", { ref, className: classes, style: containerStyle, ...props, children });
  }
);
Container.displayName = "Container";

// src/AppShell/AppShell.tsx
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var AppShell = ({
  nav,
  sidebar,
  footer,
  sidebarWidth = "260px",
  navHeight = "60px",
  children,
  className = ""
}) => {
  return /* @__PURE__ */ jsxs3(
    "div",
    {
      className: `ds-app-shell ${className}`,
      style: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--color-bg-base)"
      },
      children: [
        nav,
        /* @__PURE__ */ jsxs3(
          "div",
          {
            style: {
              flex: 1,
              overflowY: "auto"
            },
            children: [
              /* @__PURE__ */ jsxs3(
                "div",
                {
                  style: {
                    display: "flex",
                    minHeight: "100%"
                  },
                  children: [
                    sidebar && /* @__PURE__ */ jsx6(
                      "aside",
                      {
                        style: {
                          width: sidebarWidth,
                          flexShrink: 0,
                          position: "sticky",
                          top: 0,
                          alignSelf: "flex-start",
                          height: `calc(100vh - ${navHeight})`,
                          overflowY: "auto",
                          borderRight: "1px solid var(--color-border-default)",
                          backgroundColor: "var(--color-bg-surface)"
                        },
                        children: sidebar
                      }
                    ),
                    /* @__PURE__ */ jsx6(
                      "main",
                      {
                        style: {
                          flex: 1,
                          minWidth: 0
                        },
                        children
                      }
                    )
                  ]
                }
              ),
              footer
            ]
          }
        )
      ]
    }
  );
};
AppShell.displayName = "AppShell";

// src/GlobalNav/GlobalNav.tsx
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
var GlobalNav = ({
  children,
  logo,
  navigation,
  actions,
  className = ""
}) => {
  return /* @__PURE__ */ jsxs4(
    "nav",
    {
      className: `ds-global-nav ${className}`,
      style: {
        position: "sticky",
        top: 0,
        zIndex: 50,
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        borderBottom: "1px solid var(--color-border-default)",
        backgroundColor: "var(--color-bg-surface)"
      },
      children: [
        /* @__PURE__ */ jsxs4("div", { style: { display: "flex", alignItems: "center" }, children: [
          logo && /* @__PURE__ */ jsx7("div", { style: { display: "flex", alignItems: "center", flexShrink: 0 }, children: logo }),
          navigation && /* @__PURE__ */ jsx7("div", { style: { display: "flex", alignItems: "center", gap: "32px", marginLeft: "48px" }, children: navigation })
        ] }),
        actions && /* @__PURE__ */ jsx7("div", { style: { display: "flex", alignItems: "center", gap: "16px" }, children: actions }),
        children
      ]
    }
  );
};
var NavItem = ({
  children,
  isActive = false,
  onClick,
  className = ""
}) => {
  return /* @__PURE__ */ jsx7(
    "button",
    {
      onClick,
      className: `ds-nav-item ${className}`,
      style: {
        fontSize: "15px",
        fontWeight: 500,
        color: isActive ? "var(--color-primary)" : "var(--color-text-secondary)",
        background: "none",
        border: "none",
        cursor: "pointer",
        transition: "color 0.15s ease"
      },
      onMouseEnter: (e) => {
        if (!isActive) {
          e.currentTarget.style.color = "var(--color-text-primary)";
        }
      },
      onMouseLeave: (e) => {
        if (!isActive) {
          e.currentTarget.style.color = "var(--color-text-secondary)";
        }
      },
      children
    }
  );
};
var NavLogo = ({
  children,
  icon,
  title,
  className = ""
}) => {
  return /* @__PURE__ */ jsxs4("div", { className, style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
    icon && /* @__PURE__ */ jsx7(
      "div",
      {
        style: {
          width: "32px",
          height: "32px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "13px",
          fontWeight: 700,
          background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)"
        },
        children: icon
      }
    ),
    title && /* @__PURE__ */ jsx7(
      "span",
      {
        style: {
          fontWeight: 600,
          fontSize: "16px",
          color: "var(--color-text-primary)"
        },
        children: title
      }
    ),
    children
  ] });
};

// src/Sidebar/Sidebar.tsx
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
var Sidebar = ({
  children,
  width = "260px",
  className = ""
}) => {
  return /* @__PURE__ */ jsx8(
    "aside",
    {
      className: `ds-sidebar ${className}`,
      style: {
        width,
        flexShrink: 0,
        borderRight: "1px solid var(--color-border-default)",
        overflowY: "auto",
        padding: "20px 16px",
        backgroundColor: "var(--color-bg-surface)"
      },
      children
    }
  );
};
var SidebarSection = ({
  children,
  title,
  className = ""
}) => {
  return /* @__PURE__ */ jsxs5("div", { className, style: { marginBottom: "24px" }, children: [
    title && /* @__PURE__ */ jsx8(
      "div",
      {
        style: {
          padding: "8px 12px",
          fontSize: "15px",
          fontWeight: 700,
          color: "var(--color-text-primary)"
        },
        children: title
      }
    ),
    /* @__PURE__ */ jsx8("div", { style: { marginTop: "8px", display: "flex", flexDirection: "column", gap: "0" }, children })
  ] });
};
var SidebarItem = ({
  children,
  icon,
  isActive = false,
  href = "#",
  onClick,
  className = ""
}) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };
  return /* @__PURE__ */ jsxs5(
    "a",
    {
      href,
      onClick: handleClick,
      className: `ds-sidebar-item ${className}`,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "12px 12px",
        borderRadius: "0",
        fontSize: "14px",
        fontWeight: 400,
        textDecoration: "none",
        transition: "background-color 0.15s ease, color 0.15s ease",
        color: isActive ? "var(--color-primary)" : "var(--color-text-secondary)",
        backgroundColor: isActive ? "var(--color-primary-subtle)" : "transparent"
      },
      onMouseEnter: (e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = "var(--color-bg-surface-hover)";
          e.currentTarget.style.color = "var(--color-text-primary)";
        }
      },
      onMouseLeave: (e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "var(--color-text-secondary)";
        }
      },
      children: [
        icon && /* @__PURE__ */ jsx8("span", { style: { width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: icon }),
        /* @__PURE__ */ jsx8("span", { children })
      ]
    }
  );
};

// src/Footer/Footer.tsx
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
var Footer = ({
  children,
  left,
  right,
  className = ""
}) => {
  return /* @__PURE__ */ jsx9(
    "footer",
    {
      className: `ds-footer ${className}`,
      style: {
        borderTop: "1px solid var(--color-border-default)",
        padding: "40px 24px",
        backgroundColor: "var(--color-bg-surface)"
      },
      children: /* @__PURE__ */ jsxs6("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        left && /* @__PURE__ */ jsx9("div", { style: { fontSize: "13px", color: "var(--color-text-muted)" }, children: left }),
        right && /* @__PURE__ */ jsx9("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: right }),
        children
      ] })
    }
  );
};
var FooterLink = ({
  children,
  href = "#",
  onClick,
  className = ""
}) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };
  return /* @__PURE__ */ jsx9(
    "a",
    {
      href,
      onClick: handleClick,
      className: `ds-footer-link ${className}`,
      style: {
        padding: "8px",
        borderRadius: "6px",
        color: "var(--color-text-secondary)",
        textDecoration: "none",
        transition: "background-color 0.15s ease, color 0.15s ease"
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.backgroundColor = "var(--color-bg-surface-hover)";
        e.currentTarget.style.color = "var(--color-text-primary)";
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = "var(--color-text-secondary)";
      },
      children
    }
  );
};

// src/Table/Table.tsx
import { forwardRef as forwardRef6 } from "react";
import { jsx as jsx10 } from "react/jsx-runtime";
var Table = forwardRef6(
  ({
    size = "md",
    striped = false,
    hoverable = false,
    bordered = false,
    children,
    className,
    ...props
  }, ref) => {
    const classes = [
      "ds-table",
      `ds-table--${size}`,
      striped && "ds-table--striped",
      hoverable && "ds-table--hoverable",
      bordered && "ds-table--bordered",
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx10("table", { ref, className: classes, ...props, children });
  }
);
Table.displayName = "Table";
var Thead = forwardRef6(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx10("thead", { ref, className: `ds-table__head ${className || ""}`, ...props, children });
  }
);
Thead.displayName = "Thead";
var Tbody = forwardRef6(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx10("tbody", { ref, className: `ds-table__body ${className || ""}`, ...props, children });
  }
);
Tbody.displayName = "Tbody";
var Tfoot = forwardRef6(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx10("tfoot", { ref, className: `ds-table__foot ${className || ""}`, ...props, children });
  }
);
Tfoot.displayName = "Tfoot";
var Tr = forwardRef6(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx10("tr", { ref, className: `ds-table__row ${className || ""}`, ...props, children });
  }
);
Tr.displayName = "Tr";
var Th = forwardRef6(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx10("th", { ref, className: `ds-table__header-cell ${className || ""}`, ...props, children });
  }
);
Th.displayName = "Th";
var Td = forwardRef6(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx10("td", { ref, className: `ds-table__cell ${className || ""}`, ...props, children });
  }
);
Td.displayName = "Td";

// src/Chart/Chart.tsx
var getChartColor = (color) => {
  const colorMap = {
    primary: "var(--color-primary)",
    accent: "var(--color-accent)",
    success: "var(--color-success)",
    warning: "var(--color-warning)",
    danger: "var(--color-danger)"
  };
  return colorMap[color];
};
var getChartColors = () => {
  return [
    "var(--color-primary)",
    "var(--color-accent)",
    "var(--color-success)",
    "var(--color-warning)",
    "var(--color-danger)"
  ];
};
var tooltipStyle = {
  backgroundColor: "var(--color-bg-elevated)",
  border: "1px solid var(--color-border-default)",
  borderRadius: "6px",
  padding: "8px 12px",
  boxShadow: "var(--shadow-md)"
};
var tooltipLabelStyle = {
  color: "var(--color-text-primary)",
  fontWeight: 600,
  marginBottom: "4px"
};
var tooltipItemStyle = {
  color: "var(--color-text-secondary)"
};

// src/Chart/LineChart.tsx
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { jsx as jsx11, jsxs as jsxs7 } from "react/jsx-runtime";
function LineChart({
  data,
  xKey,
  yKey,
  width = "100%",
  height = 300,
  color = "primary",
  animate = true,
  showGrid = true,
  showLegend = false,
  showTooltip = true,
  smooth = true,
  showDots = true,
  className,
  style
}) {
  const chartColor = getChartColor(color);
  return /* @__PURE__ */ jsx11("div", { className: `ds-chart ${className || ""}`, style, children: /* @__PURE__ */ jsx11(ResponsiveContainer, { width, height, children: /* @__PURE__ */ jsxs7(RechartsLineChart, { data, margin: { top: 5, right: 20, left: 0, bottom: 5 }, children: [
    showGrid && /* @__PURE__ */ jsx11(
      CartesianGrid,
      {
        strokeDasharray: "3 3",
        stroke: "var(--color-border-default)",
        vertical: false
      }
    ),
    /* @__PURE__ */ jsx11(
      XAxis,
      {
        dataKey: xKey,
        stroke: "var(--color-text-muted)",
        tick: { fill: "var(--color-text-secondary)", fontSize: 12 },
        tickLine: { stroke: "var(--color-border-default)" },
        axisLine: { stroke: "var(--color-border-default)" }
      }
    ),
    /* @__PURE__ */ jsx11(
      YAxis,
      {
        stroke: "var(--color-text-muted)",
        tick: { fill: "var(--color-text-secondary)", fontSize: 12 },
        tickLine: { stroke: "var(--color-border-default)" },
        axisLine: { stroke: "var(--color-border-default)" }
      }
    ),
    showTooltip && /* @__PURE__ */ jsx11(
      Tooltip,
      {
        contentStyle: tooltipStyle,
        labelStyle: tooltipLabelStyle,
        itemStyle: tooltipItemStyle
      }
    ),
    showLegend && /* @__PURE__ */ jsx11(Legend, {}),
    /* @__PURE__ */ jsx11(
      Line,
      {
        type: smooth ? "monotone" : "linear",
        dataKey: yKey,
        stroke: chartColor,
        strokeWidth: 2,
        dot: showDots ? { fill: chartColor, strokeWidth: 2, r: 4 } : false,
        activeDot: { r: 6, stroke: chartColor, strokeWidth: 2 },
        isAnimationActive: animate,
        animationDuration: 500
      }
    )
  ] }) }) });
}
LineChart.displayName = "LineChart";

// src/Chart/BarChart.tsx
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis as XAxis2,
  YAxis as YAxis2,
  CartesianGrid as CartesianGrid2,
  Tooltip as Tooltip2,
  Legend as Legend2,
  ResponsiveContainer as ResponsiveContainer2
} from "recharts";
import { jsx as jsx12, jsxs as jsxs8 } from "react/jsx-runtime";
function BarChart({
  data,
  xKey,
  yKey,
  width = "100%",
  height = 300,
  color = "primary",
  animate = true,
  showGrid = true,
  showLegend = false,
  showTooltip = true,
  radius = 4,
  barSize = 40,
  className,
  style
}) {
  const chartColor = getChartColor(color);
  return /* @__PURE__ */ jsx12("div", { className: `ds-chart ${className || ""}`, style, children: /* @__PURE__ */ jsx12(ResponsiveContainer2, { width, height, children: /* @__PURE__ */ jsxs8(RechartsBarChart, { data, margin: { top: 5, right: 20, left: 0, bottom: 5 }, children: [
    showGrid && /* @__PURE__ */ jsx12(
      CartesianGrid2,
      {
        strokeDasharray: "3 3",
        stroke: "var(--color-border-default)",
        vertical: false
      }
    ),
    /* @__PURE__ */ jsx12(
      XAxis2,
      {
        dataKey: xKey,
        stroke: "var(--color-text-muted)",
        tick: { fill: "var(--color-text-secondary)", fontSize: 12 },
        tickLine: { stroke: "var(--color-border-default)" },
        axisLine: { stroke: "var(--color-border-default)" }
      }
    ),
    /* @__PURE__ */ jsx12(
      YAxis2,
      {
        stroke: "var(--color-text-muted)",
        tick: { fill: "var(--color-text-secondary)", fontSize: 12 },
        tickLine: { stroke: "var(--color-border-default)" },
        axisLine: { stroke: "var(--color-border-default)" }
      }
    ),
    showTooltip && /* @__PURE__ */ jsx12(
      Tooltip2,
      {
        contentStyle: tooltipStyle,
        labelStyle: tooltipLabelStyle,
        itemStyle: tooltipItemStyle,
        cursor: { fill: "var(--color-bg-muted)", opacity: 0.5 }
      }
    ),
    showLegend && /* @__PURE__ */ jsx12(Legend2, {}),
    /* @__PURE__ */ jsx12(
      Bar,
      {
        dataKey: yKey,
        fill: chartColor,
        radius: [radius, radius, 0, 0],
        maxBarSize: barSize,
        isAnimationActive: animate,
        animationDuration: 500
      }
    )
  ] }) }) });
}
BarChart.displayName = "BarChart";

// src/Chart/PieChart.tsx
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip as Tooltip3,
  Legend as Legend3,
  ResponsiveContainer as ResponsiveContainer3
} from "recharts";
import { jsx as jsx13, jsxs as jsxs9 } from "react/jsx-runtime";
function PieChart({
  data,
  nameKey,
  valueKey,
  width = "100%",
  height = 300,
  animate = true,
  showLegend = true,
  showTooltip = true,
  innerRadius = 0,
  outerRadius = 80,
  showLabels = false,
  className,
  style
}) {
  const colors = getChartColors();
  return /* @__PURE__ */ jsx13("div", { className: `ds-chart ${className || ""}`, style, children: /* @__PURE__ */ jsx13(ResponsiveContainer3, { width, height, children: /* @__PURE__ */ jsxs9(RechartsPieChart, { children: [
    showTooltip && /* @__PURE__ */ jsx13(
      Tooltip3,
      {
        contentStyle: tooltipStyle,
        labelStyle: tooltipLabelStyle,
        itemStyle: tooltipItemStyle
      }
    ),
    showLegend && /* @__PURE__ */ jsx13(
      Legend3,
      {
        verticalAlign: "bottom",
        height: 36,
        formatter: (value) => /* @__PURE__ */ jsx13("span", { style: { color: "var(--color-text-secondary)" }, children: value })
      }
    ),
    /* @__PURE__ */ jsx13(
      Pie,
      {
        data,
        dataKey: valueKey,
        nameKey,
        cx: "50%",
        cy: "50%",
        innerRadius,
        outerRadius,
        paddingAngle: 2,
        isAnimationActive: animate,
        animationDuration: 500,
        label: showLabels ? ({ name, percent }) => `${name}: ${((percent ?? 0) * 100).toFixed(0)}%` : false,
        labelLine: showLabels,
        children: data.map((_, index) => /* @__PURE__ */ jsx13(
          Cell,
          {
            fill: colors[index % colors.length],
            stroke: "var(--color-bg-surface)",
            strokeWidth: 2
          },
          `cell-${index}`
        ))
      }
    )
  ] }) }) });
}
PieChart.displayName = "PieChart";

// src/Chart/AreaChart.tsx
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis as XAxis3,
  YAxis as YAxis3,
  CartesianGrid as CartesianGrid3,
  Tooltip as Tooltip4,
  Legend as Legend4,
  ResponsiveContainer as ResponsiveContainer4
} from "recharts";
import { jsx as jsx14, jsxs as jsxs10 } from "react/jsx-runtime";
function AreaChart({
  data,
  xKey,
  yKey,
  width = "100%",
  height = 300,
  color = "primary",
  animate = true,
  showGrid = true,
  showLegend = false,
  showTooltip = true,
  smooth = true,
  gradient = true,
  className,
  style
}) {
  const chartColor = getChartColor(color);
  const gradientId = `gradient-${color}`;
  return /* @__PURE__ */ jsx14("div", { className: `ds-chart ${className || ""}`, style, children: /* @__PURE__ */ jsx14(ResponsiveContainer4, { width, height, children: /* @__PURE__ */ jsxs10(RechartsAreaChart, { data, margin: { top: 5, right: 20, left: 0, bottom: 5 }, children: [
    /* @__PURE__ */ jsx14("defs", { children: /* @__PURE__ */ jsxs10("linearGradient", { id: gradientId, x1: "0", y1: "0", x2: "0", y2: "1", children: [
      /* @__PURE__ */ jsx14("stop", { offset: "5%", stopColor: chartColor, stopOpacity: 0.3 }),
      /* @__PURE__ */ jsx14("stop", { offset: "95%", stopColor: chartColor, stopOpacity: 0 })
    ] }) }),
    showGrid && /* @__PURE__ */ jsx14(
      CartesianGrid3,
      {
        strokeDasharray: "3 3",
        stroke: "var(--color-border-default)",
        vertical: false
      }
    ),
    /* @__PURE__ */ jsx14(
      XAxis3,
      {
        dataKey: xKey,
        stroke: "var(--color-text-muted)",
        tick: { fill: "var(--color-text-secondary)", fontSize: 12 },
        tickLine: { stroke: "var(--color-border-default)" },
        axisLine: { stroke: "var(--color-border-default)" }
      }
    ),
    /* @__PURE__ */ jsx14(
      YAxis3,
      {
        stroke: "var(--color-text-muted)",
        tick: { fill: "var(--color-text-secondary)", fontSize: 12 },
        tickLine: { stroke: "var(--color-border-default)" },
        axisLine: { stroke: "var(--color-border-default)" }
      }
    ),
    showTooltip && /* @__PURE__ */ jsx14(
      Tooltip4,
      {
        contentStyle: tooltipStyle,
        labelStyle: tooltipLabelStyle,
        itemStyle: tooltipItemStyle
      }
    ),
    showLegend && /* @__PURE__ */ jsx14(Legend4, {}),
    /* @__PURE__ */ jsx14(
      Area,
      {
        type: smooth ? "monotone" : "linear",
        dataKey: yKey,
        stroke: chartColor,
        strokeWidth: 2,
        fill: gradient ? `url(#${gradientId})` : chartColor,
        fillOpacity: gradient ? 1 : 0.2,
        isAnimationActive: animate,
        animationDuration: 500
      }
    )
  ] }) }) });
}
AreaChart.displayName = "AreaChart";

// src/Select/Select.tsx
import { forwardRef as forwardRef7 } from "react";
import { jsx as jsx15, jsxs as jsxs11 } from "react/jsx-runtime";
var Select = forwardRef7(
  ({
    size = "md",
    isInvalid = false,
    disabled,
    placeholder,
    children,
    className,
    ...props
  }, ref) => {
    const wrapperClasses = [
      "ds-select-wrapper",
      `ds-select-wrapper--${size}`,
      isInvalid && "ds-select-wrapper--invalid",
      disabled && "ds-select-wrapper--disabled",
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxs11("div", { className: wrapperClasses, children: [
      /* @__PURE__ */ jsxs11(
        "select",
        {
          ref,
          className: "ds-select",
          disabled,
          "aria-invalid": isInvalid,
          ...props,
          children: [
            placeholder && /* @__PURE__ */ jsx15("option", { value: "", disabled: true, children: placeholder }),
            children
          ]
        }
      ),
      /* @__PURE__ */ jsx15("span", { className: "ds-select__icon", "aria-hidden": "true", children: /* @__PURE__ */ jsx15("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", children: /* @__PURE__ */ jsx15("path", { fillRule: "evenodd", d: "M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z", clipRule: "evenodd" }) }) })
    ] });
  }
);
Select.displayName = "Select";
var Option = forwardRef7(
  ({ children, ...props }, ref) => {
    return /* @__PURE__ */ jsx15("option", { ref, ...props, children });
  }
);
Option.displayName = "Option";

// src/Checkbox/Checkbox.tsx
import { forwardRef as forwardRef8 } from "react";
import { jsx as jsx16, jsxs as jsxs12 } from "react/jsx-runtime";
var Checkbox = forwardRef8(
  ({
    isInvalid = false,
    disabled,
    children,
    className,
    ...props
  }, ref) => {
    const wrapperClasses = [
      "ds-checkbox",
      isInvalid && "ds-checkbox--invalid",
      disabled && "ds-checkbox--disabled",
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxs12("label", { className: wrapperClasses, children: [
      /* @__PURE__ */ jsx16(
        "input",
        {
          ref,
          type: "checkbox",
          className: "ds-checkbox__input",
          disabled,
          "aria-invalid": isInvalid,
          ...props
        }
      ),
      /* @__PURE__ */ jsx16("span", { className: "ds-checkbox__box", "aria-hidden": "true", children: /* @__PURE__ */ jsx16("svg", { className: "ds-checkbox__check", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ jsx16(
        "path",
        {
          d: "M13.5 4.5L6 12L2.5 8.5",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ) }) }),
      children && /* @__PURE__ */ jsx16("span", { className: "ds-checkbox__label", children })
    ] });
  }
);
Checkbox.displayName = "Checkbox";

// src/Radio/Radio.tsx
import {
  forwardRef as forwardRef9,
  createContext,
  useContext,
  useState
} from "react";
import { jsx as jsx17, jsxs as jsxs13 } from "react/jsx-runtime";
var RadioGroupContext = createContext(null);
var RadioGroup = forwardRef9(
  ({ name, value, defaultValue, onChange, disabled, children, className, ...props }, ref) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const isControlled = value !== void 0;
    const currentValue = isControlled ? value : internalValue;
    const handleChange = (newValue) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };
    return /* @__PURE__ */ jsx17(RadioGroupContext.Provider, { value: { name, value: currentValue, onChange: handleChange, disabled }, children: /* @__PURE__ */ jsx17(
      "div",
      {
        ref,
        role: "radiogroup",
        className: `ds-radio-group ${className || ""}`,
        ...props,
        children
      }
    ) });
  }
);
RadioGroup.displayName = "RadioGroup";
var Radio = forwardRef9(
  ({ value, disabled, children, className, onChange, ...props }, ref) => {
    const context = useContext(RadioGroupContext);
    const isDisabled = disabled || context?.disabled;
    const isChecked = context ? context.value === value : props.checked;
    const name = context?.name || props.name;
    const handleChange = (e) => {
      if (context?.onChange) {
        context.onChange(value);
      }
      onChange?.(e);
    };
    const wrapperClasses = [
      "ds-radio",
      isDisabled && "ds-radio--disabled",
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxs13("label", { className: wrapperClasses, children: [
      /* @__PURE__ */ jsx17(
        "input",
        {
          ref,
          type: "radio",
          className: "ds-radio__input",
          name,
          value,
          checked: isChecked,
          disabled: isDisabled,
          onChange: handleChange,
          ...props
        }
      ),
      /* @__PURE__ */ jsx17("span", { className: "ds-radio__circle", "aria-hidden": "true", children: /* @__PURE__ */ jsx17("span", { className: "ds-radio__dot" }) }),
      children && /* @__PURE__ */ jsx17("span", { className: "ds-radio__label", children })
    ] });
  }
);
Radio.displayName = "Radio";

// src/Modal/Modal.tsx
import {
  forwardRef as forwardRef10,
  useEffect,
  useCallback
} from "react";
import { createPortal } from "react-dom";
import { jsx as jsx18, jsxs as jsxs14 } from "react/jsx-runtime";
var Modal = forwardRef10(
  ({
    isOpen,
    onClose,
    title,
    size = "md",
    closeOnOverlayClick = true,
    closeOnEsc = true,
    children,
    className,
    ...props
  }, ref) => {
    const handleKeyDown = useCallback(
      (e) => {
        if (closeOnEsc && e.key === "Escape") {
          onClose();
        }
      },
      [closeOnEsc, onClose]
    );
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", handleKeyDown);
      }
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [isOpen, handleKeyDown]);
    if (!isOpen) return null;
    const handleOverlayClick = (e) => {
      if (closeOnOverlayClick && e.target === e.currentTarget) {
        onClose();
      }
    };
    const modalContent = /* @__PURE__ */ jsx18("div", { className: "ds-modal-overlay", onClick: handleOverlayClick, children: /* @__PURE__ */ jsxs14(
      "div",
      {
        ref,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": title ? "modal-title" : void 0,
        className: `ds-modal ds-modal--${size} ${className || ""}`,
        ...props,
        children: [
          title && /* @__PURE__ */ jsxs14("div", { className: "ds-modal__header", children: [
            /* @__PURE__ */ jsx18("h2", { id: "modal-title", className: "ds-modal__title", children: title }),
            /* @__PURE__ */ jsx18(
              "button",
              {
                type: "button",
                className: "ds-modal__close",
                onClick: onClose,
                "aria-label": "\u9589\u3058\u308B",
                children: /* @__PURE__ */ jsx18("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx18("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" }) })
              }
            )
          ] }),
          /* @__PURE__ */ jsx18("div", { className: "ds-modal__body", children })
        ]
      }
    ) });
    return createPortal(modalContent, document.body);
  }
);
Modal.displayName = "Modal";
var ModalFooter = forwardRef10(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx18("div", { ref, className: `ds-modal__footer ${className || ""}`, ...props, children });
  }
);
ModalFooter.displayName = "ModalFooter";

// src/Toast/Toast.tsx
import { forwardRef as forwardRef11 } from "react";
import { jsx as jsx19, jsxs as jsxs15 } from "react/jsx-runtime";
var VariantIcon = ({ variant }) => {
  const icons = {
    info: /* @__PURE__ */ jsx19("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx19("path", { fillRule: "evenodd", d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z", clipRule: "evenodd" }) }),
    success: /* @__PURE__ */ jsx19("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx19("path", { fillRule: "evenodd", d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z", clipRule: "evenodd" }) }),
    warning: /* @__PURE__ */ jsx19("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx19("path", { fillRule: "evenodd", d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z", clipRule: "evenodd" }) }),
    error: /* @__PURE__ */ jsx19("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx19("path", { fillRule: "evenodd", d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z", clipRule: "evenodd" }) })
  };
  return /* @__PURE__ */ jsx19("span", { className: "ds-toast__icon", children: icons[variant] });
};
var Toast = forwardRef11(
  ({ message, variant = "info", closable = true, onClose, className, ...props }, ref) => {
    const classes = [
      "ds-toast",
      `ds-toast--${variant}`,
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxs15("div", { ref, role: "alert", className: classes, ...props, children: [
      /* @__PURE__ */ jsx19(VariantIcon, { variant }),
      /* @__PURE__ */ jsx19("span", { className: "ds-toast__message", children: message }),
      closable && onClose && /* @__PURE__ */ jsx19(
        "button",
        {
          type: "button",
          className: "ds-toast__close",
          onClick: onClose,
          "aria-label": "\u9589\u3058\u308B",
          children: /* @__PURE__ */ jsx19("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", children: /* @__PURE__ */ jsx19("path", { d: "M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" }) })
        }
      )
    ] });
  }
);
Toast.displayName = "Toast";

// src/Toast/ToastProvider.tsx
import {
  createContext as createContext2,
  useContext as useContext2,
  useState as useState2,
  useCallback as useCallback2
} from "react";
import { createPortal as createPortal2 } from "react-dom";
import { jsx as jsx20, jsxs as jsxs16 } from "react/jsx-runtime";
var ToastContext = createContext2(null);
var ToastProvider = ({
  children,
  defaultDuration = 5e3,
  maxToasts = 5
}) => {
  const [toasts, setToasts] = useState2([]);
  const removeToast = useCallback2((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);
  const toast = useCallback2(
    (options) => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const duration = options.duration ?? defaultDuration;
      const newToast = {
        ...options,
        id,
        closable: options.closable ?? true
      };
      setToasts((prev) => {
        const updated = [...prev, newToast];
        if (updated.length > maxToasts) {
          return updated.slice(-maxToasts);
        }
        return updated;
      });
      if (duration > 0) {
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }
    },
    [defaultDuration, maxToasts, removeToast]
  );
  return /* @__PURE__ */ jsxs16(ToastContext.Provider, { value: { toast, removeToast }, children: [
    children,
    typeof document !== "undefined" && createPortal2(
      /* @__PURE__ */ jsx20("div", { className: "ds-toast-container", children: toasts.map((t) => /* @__PURE__ */ jsx20(
        Toast,
        {
          message: t.message,
          variant: t.variant,
          closable: t.closable,
          onClose: () => removeToast(t.id)
        },
        t.id
      )) }),
      document.body
    )
  ] });
};
ToastProvider.displayName = "ToastProvider";
var useToast = () => {
  const context = useContext2(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
export {
  AppShell,
  AreaChart,
  BarChart,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Container,
  Footer,
  FooterLink,
  GlobalNav,
  Heading,
  Input,
  LineChart,
  Modal,
  ModalFooter,
  NavItem,
  NavLogo,
  Option,
  PieChart,
  Radio,
  RadioGroup,
  Select,
  Sidebar,
  SidebarItem,
  SidebarSection,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Toast,
  ToastProvider,
  Tr,
  getChartColor,
  getChartColors,
  useToast
};
