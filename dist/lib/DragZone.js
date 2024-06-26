import React from "react";
import Container from "./Container";
import ItemsContainer from "./ItemsContainer";
class DragZOne extends Container {
    ref = React.createRef();
    onLayoutCallback = () => {
        this.props.onZoneLayoutChange(this.props.zoneId, this.state.layout);
    };
    renderItems = (items) => {
        const { renderItem, itemKeyExtractor, addedHeight, onDrag, itemsInZoneStyle, draggedElementStyle, onGrant, onDragEnd, changed, zoneId, itemsDisplay, numCollumns, listZonesIdApplyMulti, } = this.props;
        let _itemsDisplay = itemsDisplay;
        if (listZonesIdApplyMulti &&
            listZonesIdApplyMulti.length > 0 &&
            !listZonesIdApplyMulti.includes(zoneId)) {
            _itemsDisplay = "collumn";
        }
        if (!items || items.length === 0)
            return null;
        return (React.createElement(ItemsContainer, { itemsContainerStyle: {}, dragging: false, onGrant: onGrant, addedHeight: addedHeight, numCollumns: numCollumns, itemsDisplay: _itemsDisplay, changed: changed, draggedElementStyle: draggedElementStyle, itemsInZoneStyle: itemsInZoneStyle, itemKeyExtractor: itemKeyExtractor, renderItem: renderItem, onDragEnd: onDragEnd, onDrag: (e, l, cb) => onDrag(e, l, cb, zoneId), items: items, zoneId: zoneId, propsInItems: this.props.propsInItems, func: this.props.func }));
    };
    render() {
        const { renderZone, zone } = this.props;
        const hover = zone.layout?.hover;
        const child = renderZone(zone, this.renderItems(zone.items), hover);
        const newStyle = {};
        if (zone.dragged) {
            newStyle.zIndex = 10000;
            newStyle.elevation = 10000;
        }
        return React.cloneElement(child, {
            style: { ...newStyle, ...child.props.style },
            ref: this.ref,
            onLayout: (e) => this.onSetLayout(e),
        });
    }
}
export default DragZOne;
