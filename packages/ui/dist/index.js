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
export {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input
};
