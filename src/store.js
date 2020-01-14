'use strict';
import item from './item';

const items = [];
const hideCheckedItems = false;

const findById = function(id) {
  return items.find(id => id === id);
}

const addItem = function(name) {
  try {
    item.validateName(name);
    const newItem = item.create(name);
    this.items.push(newItem);
  } 
  catch (error) {
    console.error(`Cannot add item: ${error.message}`);
  }
}

const findAndToggleChecked = function(id) {
  const currentItem = findById(id);
  currentItem.checked = !currentItem.checked; 
}

const findAndUpdateName = function(id, newName) {
  try {
    item.validateName(newName);
    findById(id);
  } 
  catch (error) {
    console.error(`Cannot update name: ${error.message}`);
  }
}

const findAndDelete = function(id) {
  findById(id);
  this.items = this.items.filter(currentItem => currentItem.id !== id)
}

const toggleCheckedFilter = function() {
  this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
  items,
  hideCheckedItems,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};
