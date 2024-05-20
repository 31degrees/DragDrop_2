import React, { ReactElement } from "react";
import { PanResponderGestureState, TouchableOpacityProps, View, ViewStyle } from "react-native";
import Container, { ContainerProps, ContainerState, Display, LayoutProps } from "./Container";
interface DragZOneState extends ContainerState {
    layout: LayoutProps;
}
interface DragZOneProps extends ContainerProps {
    addedHeight: number;
    onDrag: (gestureState: PanResponderGestureState, layout: LayoutProps | null, cb: Function, zoneId: any) => any;
    onGrant: (value: boolean) => any;
    onDragEnd: (gesture: PanResponderGestureState) => boolean;
    draggedElementStyle?: ViewStyle;
    itemKeyExtractor: (item: any) => number | string;
    itemsInZoneStyle?: ViewStyle;
    zoneId: any;
    zone: any;
    onZoneLayoutChange: (zoneId: any, layout: LayoutProps) => any;
    renderItem: (item: any, index: number) => ReactElement;
    renderZone: (zone: any, children?: ReactElement, hover?: boolean) => ReactElement;
    itemsDisplay?: Display;
    numCollumns?: number;
    listZonesIdApplyMulti?: number[];
    propsInItems?: TouchableOpacityProps;
    func: (i?: any, cb?: (i?: any) => void) => void;
}
declare class DragZOne extends Container<DragZOneProps, DragZOneState> {
    ref: React.RefObject<View>;
    onLayoutCallback: () => void;
    renderItems: (items: any) => any;
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}
export default DragZOne;
