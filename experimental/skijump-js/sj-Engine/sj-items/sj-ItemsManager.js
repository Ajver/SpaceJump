
SJ.ItemsManager = 
class {
  constructor() {
    this._items = []; 
    this._activeItems = [];
  }

  _testItems() {
    const it = new SJ.Item("Foka", "padFriction", 0.5, "", 10);

    print("Begin\n")
    print("Pad friction ", SJ.V.padFriction);
    
    this.addItem(it)
    print("After add:\n", this._items);
    print("Pad friction ", SJ.V.padFriction);
    
    this.removeItem(it);
    print("After remove:\n", this._items);
    print("Pad friction ", SJ.V.padFriction);

    const ait = new SJ.ActiveItem("Foo", "HAHAH", 10, () => {});
    this.addItem(ait)
    print("After add ACTIVE:\n", this._activeItems);
    
    this.removeItem(ait);
    print("After remove ACTIVE:\n", this._activeItems);

    print("END")
  }

  addItem(item) {
    if(item.isActiveItem === true) {
      this._activeItems.push(item);
    }else {
      this._items.push(item); 
    }
  }

  removeItem(item) {
    if(item.isActiveItem === true) {
      var itemsList = this._activeItems;
    }else {
      item.unequip();
      var itemsList = this._items;      
    }

    for(let i=0; i<itemsList.length; i++) {
      if(itemsList[i] === item) {
        itemsList.splice(i, 1);
        return;
      }
    }
  }
  
  equipAllItems() {
    this._items.forEach(item => {
      item.equip();
    });
    SJ.itemsDisplay.updateItemsList();
  }

  unequipAllItems() {
    this._items.forEach(item => {
      item.unequip();
    });
  }

  resetActiveItems() {
    this._activeItems.forEach(item => {
      item.reset();
    });
  }

  getItemsCount() {
    return this._items.length + this._activeItems.length;
  }

  onKeyPressed() {
    if(keyCode > 48 && keyCode < 58) {
      const itemIdx = keyCode - 49;
      if(itemIdx < this._activeItems.length) {
        const item = this._activeItems[itemIdx];
        if(item.disabled) {
          return;
        }
        if(item.activate()) {
          item.afterActivate();
        }
      }
    }
  }

}