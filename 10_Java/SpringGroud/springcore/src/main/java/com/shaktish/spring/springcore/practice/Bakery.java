package com.shaktish.spring.springcore.practice;

public class Bakery {
	private String ItemName;
	private int quantity;
	private IceCreamPack iceCreamPack;

	Bakery(String ItemName, int quantity, IceCreamPack iceCreamPack) {
		this.ItemName = ItemName;
		this.quantity = quantity;
		this.iceCreamPack = iceCreamPack;
	}

	public String getItemName() {
		return ItemName;
	}

	public void setItemName(String itemName) {
		ItemName = itemName;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public IceCreamPack getIceCreamPack() {
		return iceCreamPack;
	}

	public void setIceCreamPack(IceCreamPack iceCreamPack) {
		this.iceCreamPack = iceCreamPack;
	}

	@Override
	public String toString() {
		return "Bakery [ItemName=" + ItemName + ", quantity=" + quantity + ", iceCreamPack=" + iceCreamPack + "]";
	}

}
