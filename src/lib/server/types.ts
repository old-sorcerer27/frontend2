import type { Component, ComponentProps } from "svelte";

export interface User {
	id: Number;
	email: String;
	username: String;
	firstName: String;
	lastName: String;
	secondName: String;
    avatar: String;
	rating: Number;
    city: String;
}

export interface Exchange {
    bookOffer: Book;
    bookRequest: Book;
	UserOffer: User;
	UserRequest: User;
}

export interface Proposal {
    FullMatch: Exchange[];
    PartialMatch: Exchange[];
    Recommended: Exchange[];
}

export interface Message {
    id: Number;
    sender: String;
    recipient: String;
    subject: String;
    body: String;
    timestamp: Date;
}

export interface Book {
    id: Number;
	author: String;
    title: String;
    data: String;
}

export interface ExchangeCard {
    exchange: Exchange;
    OfferStatus: String;
    RequestStatus: String;
}

export interface Review {
    text : String;
    user: User;
    date: Date;
}

