
SJ.Item =
class {
  constructor(itemName, changedVarName, varMult, description) {
    this.itemName = itemName;
    this.changedVarName = changedVarName;
    this.varMult = varMult;
    this.description = description;
  }

  equip() {
    SJ.V[this.changedVarName] *= this.varMult;
  }

  unequip() {
    SJ.V[this.changedVarName] /= this.varMult;
  }
}