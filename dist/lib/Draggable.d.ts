import { Component, ReactNode } from "react";
import _ from "lodash";
import { Animated, GestureResponderEvent, PanResponderGestureState, PanResponderInstance, TouchableOpacityProps, ViewStyle } from "react-native";
import { LayoutProps } from "./Container";
export interface DraggableState {
    pan: Animated.ValueXY;
    dragging: boolean;
    pressed: boolean;
    count: number;
}
export interface DraggableProps {
    addedHeight: number;
    layout: LayoutProps | null;
    children: ReactNode;
    onDrag: (gestureState: PanResponderGestureState, layout: LayoutProps | null, cb: () => any, zoneId?: any) => any;
    onGrant: (value: boolean) => any;
    onDragEnd: (gesture: PanResponderGestureState) => boolean;
    draggedElementStyle?: ViewStyle;
    style: ViewStyle;
    propsInItems?: TouchableOpacityProps;
    item: any;
    func: (i?: any, cb?: (i?: any) => void) => void;
}
declare class Draggable extends Component<DraggableProps, DraggableState> {
    state: {
        pan: Animated.ValueXY;
        dragging: boolean;
        pressed: boolean;
        count: number;
    };
    panResponder?: PanResponderInstance;
    onResponderMove: (e: GestureResponderEvent, gesture: PanResponderGestureState) => void;
    onDragEnd: (e: GestureResponderEvent, gesture: PanResponderGestureState) => void;
    onEnd: (e: GestureResponderEvent, gesture: PanResponderGestureState) => void;
    UNSAFE_componentWillMount(): void;
    onClickItem: () => void;
    onPress: _.DebouncedFunc<() => void>;
    render(): JSX.Element;
}
export default Draggable;
