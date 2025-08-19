package com.devsuperior.dsmovie.dto;

import org.springframework.data.domain.Page;

import java.util.List;

public class PageDTO<T> {

    private List<T> content;
    private int currentPage;
    private long totalElements;
    private int totalPages;

    public PageDTO(Page<T> page){
        this.content = page.getContent();
        this.currentPage = page.getNumber();
        this.totalElements = page.getTotalElements();
        this.totalPages = page.getTotalPages();
    }

    public List<T> getContent() {
        return content;
    }

    public void setContent(List<T> content) {
        this.content = content;
    }

    public int getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }

    public long getTotalElements() {
        return totalElements;
    }

    public void setTotalElements(long totalElements) {
        this.totalElements = totalElements;
    }

    public int getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(int totalPages) {
        this.totalPages = totalPages;
    }
}
