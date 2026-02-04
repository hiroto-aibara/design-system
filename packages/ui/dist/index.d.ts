import * as react from 'react';
import { ButtonHTMLAttributes, ReactNode, InputHTMLAttributes, HTMLAttributes } from 'react';

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

export { Button, type ButtonProps, type ButtonSize, type ButtonVariant, Card, CardBody, type CardBodyProps, CardFooter, type CardFooterProps, CardHeader, type CardHeaderProps, type CardPadding, type CardProps, Input, type InputProps, type InputSize };
