package com.shaktish.spring.springcore.practice;

import org.springframework.beans.factory.annotation.Autowired;

public class VegetableShopAutoWired {
	private int carrot;
	private int vendika;
	private int kovakai;
	
	@Autowired
	VegetableShopAutoWired(int carrot, int vendika, int kovakai) {
		this.carrot = carrot;
		this.vendika = vendika;
		this.kovakai = kovakai;
	}

	public int getCarrot() {
		return carrot;
	}

	public void setCarrot(int carrot) {
		this.carrot = carrot;
	}

	public int getVendika() {
		return vendika;
	}

	public void setVendika(int vendika) {
		this.vendika = vendika;
	}

	public int getKovakai() {
		return kovakai;
	}

	public void setKovakai(int kovakai) {
		this.kovakai = kovakai;
	}

	@Override
	public String toString() {
		return "VegetableShopAutoWired [carrot=" + carrot + ", vendika=" + vendika + ", kovakai=" + kovakai + "]";
	}

}
