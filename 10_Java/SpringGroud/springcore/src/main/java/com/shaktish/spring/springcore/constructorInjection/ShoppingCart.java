package com.shaktish.spring.springcore.constructorInjection;

public class ShoppingCart {
	private Item Item;
	
	ShoppingCart (Item Item) {
		this.Item = Item; 
	}

	public Item getItem() {
		return Item;
	}

	public void setItem(Item item) {
		Item = item;
	}
}
