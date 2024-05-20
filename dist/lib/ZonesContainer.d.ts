import React, { ReactElement } from "react";
import { PanResponderGestureState, TouchableOpacityProps, View, ViewStyle } from "react-native";
import Container, { ContainerProps, ContainerState, Display, LayoutProps } from "./Container";
interface ZonesContainerState extends ContainerState {
    layout: LayoutProps;
}
interface ZonesContainerProps extends ContainerProps {
    addedHeight: number;
    onDrag: (gestureState: PanResponderGestureState, layout: LayoutProps | null, cb: Function, zoneId: any) => any;
    onGrant: (value: boolean) => any;
    onDragEnd: (gesture: PanResponderGestureState) => boolean;
    draggedElementStyle?: ViewStyle;
    itemKeyExtractor: (item: any) => number | string;
    zoneKeyExtractor: (item: any) => number | string;
    itemsDisplay?: Display;
    numCollumns?: number;
    itemsInZoneStyle?: ViewStyle;
    zonesContainerStyle?: ViewStyle;
    onZoneLayoutChange: (zoneId: any, layout: LayoutProps) => any;
    zones: any[];
    renderItem: (item: any, index: number) => ReactElement;
    renderZone: (zone: any, children?: ReactElement, hover?: boolean) => ReactElement;
    listZonesIdApplyMulti?: number[];
    propsInItems?: TouchableOpacityProps;
    func: (i?: any, cb?: (i?: any) => void) => void;
}
declare class ZonesContainer extends Container<ZonesContainerProps, ZonesContainerState> {
    ref: React.RefObject<View>;
    render(): JSX.Element;
}
export default ZonesContainer;
