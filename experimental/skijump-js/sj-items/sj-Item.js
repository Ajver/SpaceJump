
SJ.Item =
class {
  constructor(itemName, changedVarName, varMult, description, price) {
    this.itemName = itemName;
    this.changedVarName = changedVarName;
    this.varMult = varMult;
    this.description = "Koszt: " + price + "\n" + description;
    this.price = price;
  }

  equip() {
    SJ.V[this.changedVarName] *= this.varMult;
  }

  unequip() {
    SJ.V[this.changedVarName] /= this.varMult;
  }
}