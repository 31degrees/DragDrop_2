import React, { ReactElement } from "react";
import { PanResponderGestureState, ScrollView, TouchableOpacityProps, ViewStyle } from "react-native";
import Container, { ContainerProps, ContainerState, Display, LayoutProps } from "./Container";
interface DragAndDropState extends ContainerState {
    items: any[];
    zones: any[];
    dragging: boolean;
    changed: boolean | null;
    scrollY: number;
    counter: number;
    addedHeight: number | null;
    layout: LayoutProps | null;
    contentSize?: {
        width: number;
        height: number;
    } | null;
    itemsContainerLayout: LayoutProps | null;
}
interface DragAndDropProps extends ContainerProps {
    items: any[];
    zones: any[];
    zoneKeyExtractor: (zone: any) => string | number;
    itemKeyExtractor: (zone: any) => string | number;
    maxItemsPerZone?: number;
    onMaj: (zones: any[], items: any[]) => any;
    itemsInZoneStyle?: ViewStyle;
    style?: ViewStyle;
    contentContainerStyle?: ViewStyle;
    draggedElementStyle?: ViewStyle;
    headerComponent?: ReactElement;
    footerComponent?: ReactElement;
    itemsContainerHeightFixed?: boolean;
    renderItem: (item: any, index: number) => ReactElement;
    itemsContainerStyle?: ViewStyle;
    zonesContainerStyle?: ViewStyle;
    renderZone: (zone: any, children?: ReactElement, hover?: boolean) => ReactElement;
    itemsDisplay?: Display;
    itemsInZoneDisplay?: Display;
    itemsNumCollumns?: number;
    itemsInZoneNumCollumns?: number;
    listZonesIdApplyMulti?: number[];
    enableZoneItems?: boolean;
    propsInItems?: TouchableOpacityProps;
    func: (i?: any, cb?: (i?: any) => void) => void;
}
declare class DragAndDrop extends Container<DragAndDropProps, DragAndDropState> {
    state: DragAndDropState;
    timeout: number | null;
    ref: React.RefObject<ScrollView>;
    UNSAFE_componentWillReceiveProps(nextProps: DragAndDropProps): void;
    onDrag: (gesture: PanResponderGestureState, layoutElement: LayoutProps | null, cb: Function, zoneId: any) => void;
    onDragEnd: (item: any) => boolean;
    render(): JSX.Element;
}
export default DragAndDrop;
