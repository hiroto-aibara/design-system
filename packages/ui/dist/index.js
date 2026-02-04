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

// src/GlobalNav/GlobalNav.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var GlobalNav = ({
  children,
  logo,
  navigation,
  actions,
  className = ""
}) => {
  return /* @__PURE__ */ jsxs3(
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
        /* @__PURE__ */ jsxs3("div", { style: { display: "flex", alignItems: "center" }, children: [
          logo && /* @__PURE__ */ jsx4("div", { style: { display: "flex", alignItems: "center", flexShrink: 0 }, children: logo }),
          navigation && /* @__PURE__ */ jsx4("div", { style: { display: "flex", alignItems: "center", gap: "32px", marginLeft: "48px" }, children: navigation })
        ] }),
        actions && /* @__PURE__ */ jsx4("div", { style: { display: "flex", alignItems: "center", gap: "16px" }, children: actions }),
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
  return /* @__PURE__ */ jsx4(
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
  return /* @__PURE__ */ jsxs3("div", { className, style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
    icon && /* @__PURE__ */ jsx4(
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
    title && /* @__PURE__ */ jsx4(
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
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var Sidebar = ({
  children,
  width = "260px",
  className = ""
}) => {
  return /* @__PURE__ */ jsx5(
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
  return /* @__PURE__ */ jsxs4("div", { className, style: { marginBottom: "24px" }, children: [
    title && /* @__PURE__ */ jsx5(
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
    /* @__PURE__ */ jsx5("div", { style: { marginTop: "8px", display: "flex", flexDirection: "column", gap: "0" }, children })
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
  return /* @__PURE__ */ jsxs4(
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
        icon && /* @__PURE__ */ jsx5("span", { style: { width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: icon }),
        /* @__PURE__ */ jsx5("span", { children })
      ]
    }
  );
};

// src/Footer/Footer.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var Footer = ({
  children,
  left,
  right,
  className = ""
}) => {
  return /* @__PURE__ */ jsx6(
    "footer",
    {
      className: `ds-footer ${className}`,
      style: {
        borderTop: "1px solid var(--color-border-default)",
        padding: "40px 24px",
        backgroundColor: "var(--color-bg-surface)"
      },
      children: /* @__PURE__ */ jsxs5("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        left && /* @__PURE__ */ jsx6("div", { style: { fontSize: "13px", color: "var(--color-text-muted)" }, children: left }),
        right && /* @__PURE__ */ jsx6("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: right }),
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
  return /* @__PURE__ */ jsx6(
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
export {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Footer,
  FooterLink,
  GlobalNav,
  Input,
  NavItem,
  NavLogo,
  Sidebar,
  SidebarItem,
  SidebarSection
};
