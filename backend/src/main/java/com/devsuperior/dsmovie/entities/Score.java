package com.devsuperior.dsmovie.entities;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_score")
public class Score {
	
	@EmbeddedId
	private ScorePK idScorePK = new ScorePK();
	
	private Double valor;
	
	public Score() {}
	
	public void setMovie(Movie movie) {
		idScorePK.setMovie(movie);
	}
	
	public void setUser(User user) {
		idScorePK.setUser(user);
	}

	public ScorePK getId() {
		return idScorePK;
	}

	public void setId(ScorePK id) {
		this.idScorePK = id;
	}

	public Double getValue() {
		return valor;
	}

	public void setValue(Double value) {
		this.valor = value;
	}
	
	
	
}
