import * as React from 'react';
import React__default, { ButtonHTMLAttributes, ReactNode, InputHTMLAttributes, HTMLAttributes } from 'react';

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
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

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
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

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
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
declare const CardHeader: React.ForwardRefExoticComponent<CardHeaderProps & React.RefAttributes<HTMLDivElement>>;
interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
declare const CardBody: React.ForwardRefExoticComponent<CardBodyProps & React.RefAttributes<HTMLDivElement>>;
interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
declare const CardFooter: React.ForwardRefExoticComponent<CardFooterProps & React.RefAttributes<HTMLDivElement>>;

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
declare const Heading: React__default.ForwardRefExoticComponent<HeadingProps & React__default.RefAttributes<HTMLHeadingElement>>;

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
declare const Container: React.ForwardRefExoticComponent<ContainerProps & React.RefAttributes<HTMLDivElement>>;

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
declare const AppShell: React__default.FC<AppShellProps>;

interface GlobalNavProps {
    children?: React__default.ReactNode;
    /** Logo/brand area content */
    logo?: React__default.ReactNode;
    /** Navigation items */
    navigation?: React__default.ReactNode;
    /** Right side actions (buttons, icons, etc.) */
    actions?: React__default.ReactNode;
    /** Additional className for customization */
    className?: string;
}
declare const GlobalNav: React__default.FC<GlobalNavProps>;
interface NavItemProps {
    children: React__default.ReactNode;
    isActive?: boolean;
    onClick?: () => void;
    className?: string;
}
declare const NavItem: React__default.FC<NavItemProps>;
interface NavLogoProps {
    children?: React__default.ReactNode;
    icon?: React__default.ReactNode;
    title?: string;
    className?: string;
}
declare const NavLogo: React__default.FC<NavLogoProps>;

interface SidebarProps {
    children?: React__default.ReactNode;
    /** Width of the sidebar (default: 256px / 16rem) */
    width?: string;
    /** Additional className for customization */
    className?: string;
}
declare const Sidebar: React__default.FC<SidebarProps>;
interface SidebarSectionProps {
    children?: React__default.ReactNode;
    title?: string;
    className?: string;
}
declare const SidebarSection: React__default.FC<SidebarSectionProps>;
interface SidebarItemProps {
    children: React__default.ReactNode;
    icon?: React__default.ReactNode;
    isActive?: boolean;
    href?: string;
    onClick?: () => void;
    className?: string;
}
declare const SidebarItem: React__default.FC<SidebarItemProps>;

interface FooterProps {
    children?: React__default.ReactNode;
    /** Left side content (e.g., copyright) */
    left?: React__default.ReactNode;
    /** Right side content (e.g., social links) */
    right?: React__default.ReactNode;
    /** Additional className for customization */
    className?: string;
}
declare const Footer: React__default.FC<FooterProps>;
interface FooterLinkProps {
    children: React__default.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
}
declare const FooterLink: React__default.FC<FooterLinkProps>;

export { AppShell, type AppShellProps, Button, type ButtonProps, type ButtonSize, type ButtonVariant, Card, CardBody, type CardBodyProps, CardFooter, type CardFooterProps, CardHeader, type CardHeaderProps, type CardPadding, type CardProps, Container, type ContainerMaxWidth, type ContainerProps, Footer, FooterLink, type FooterLinkProps, type FooterProps, GlobalNav, type GlobalNavProps, Heading, type HeadingLevel, type HeadingProps, Input, type InputProps, type InputSize, NavItem, type NavItemProps, NavLogo, type NavLogoProps, Sidebar, SidebarItem, type SidebarItemProps, type SidebarProps, SidebarSection, type SidebarSectionProps };
