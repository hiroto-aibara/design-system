import * as react from 'react';
import { SVGProps, ReactNode } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
    /** アイコンのサイズ */
    size?: number | string;
    /** タイトル（アクセシビリティ用） */
    title?: string;
}
declare function createIcon(displayName: string, path: ReactNode): react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const AlertIcon: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const ArrowRightIcon: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const CheckIcon: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const ChevronDownIcon: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const CloseIcon: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const HomeIcon: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const InfoIcon: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const MenuIcon: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const PlusIcon: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const SearchIcon: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const SettingsIcon: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const SuccessIcon: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const WarningIcon: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

export { AlertIcon, ArrowRightIcon, CheckIcon, ChevronDownIcon, CloseIcon, HomeIcon, type IconProps, InfoIcon, MenuIcon, PlusIcon, SearchIcon, SettingsIcon, SuccessIcon, WarningIcon, createIcon };
