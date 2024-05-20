import React from "react";
import { View, } from "react-native";
import Container from "./Container";
import DragItem from "./DragItem";
import _ from "lodash";
class ItemsContainer extends Container {
    ref = React.createRef();
    onLayoutCallback = () => {
        if (this.props.onLayout) {
            this.props.onLayout(this.state.layout);
        }
    };
    render() {
        const { itemsContainerStyle, layout, dragging, itemKeyExtractor, onGrant, addedHeight, renderItem, onDragEnd, changed, onDrag, itemsContainerHeightFixed, draggedElementStyle, itemsInZoneStyle, items, itemsDisplay, numCollumns, zoneId, propsInItems, } = this.props;
        const newItemsInZoneStyle = {};
        const newItemsInZoneStyle2 = {};
        const newStyle = {};
        const newStyle2 = {};
        if (dragging) {
            newStyle.zIndex = 10000;
        }
        if (itemsContainerHeightFixed) {
            newStyle.width = layout?.width;
            newStyle.height = layout?.height;
            newStyle2.width = layout?.width;
            newStyle2.height = layout?.height;
        }
        if (itemsDisplay === "row") {
            newStyle.flexDirection = "row";
            newStyle.alignItems = "center";
            newStyle.justifyContent = "space-between";
            newStyle.flexWrap = "wrap";
            newItemsInZoneStyle.width = `${100 / (numCollumns || 1) - (numCollumns && numCollumns > 0 ? 1 : 0)}%`;
        }
        const _itemsWithMulti = _.cloneDeep(items).filter((i) => i.multi == true);
        const _itemsFull = _.cloneDeep(items).filter((i) => i.multi == false);
        return (React.createElement(React.Fragment, null,
            React.createElement(View, { onLayout: (e) => {
                    this.onSetLayout(e);
                }, style: [itemsContainerStyle, newStyle2] }, _itemsFull.map((item, index) => {
                const key = itemKeyExtractor(item);
                return (React.createElement(DragItem, { key: key, onDrag: onDrag, onGrant: onGrant, changed: changed, draggedElementStyle: draggedElementStyle, addedHeight: addedHeight, itemsInZoneStyle: {
                        ...itemsInZoneStyle,
                        ...newItemsInZoneStyle2,
                    }, onDragEnd: onDragEnd, item: item, renderItem: renderItem, tabIndex: index, propsInItems: propsInItems, func: this.props.func }));
            })),
            React.createElement(View, { onLayout: (e) => {
                    this.onSetLayout(e);
                }, style: [itemsContainerStyle, newStyle] }, _itemsWithMulti.map((item, index) => {
                const key = itemKeyExtractor(item);
                return (React.createElement(DragItem, { key: key, onDrag: onDrag, onGrant: onGrant, changed: changed, draggedElementStyle: draggedElementStyle, addedHeight: addedHeight, itemsInZoneStyle: {
                        ...itemsInZoneStyle,
                        ...newItemsInZoneStyle,
                    }, onDragEnd: onDragEnd, item: item, renderItem: renderItem, tabIndex: index, propsInItems: propsInItems, func: this.props.func }));
            }))));
    }
}
export default ItemsContainer;
