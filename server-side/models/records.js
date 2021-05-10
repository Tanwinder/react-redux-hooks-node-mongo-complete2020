const express = require('express');
const mongoose = require('mongoose');

const { Schema, model } = mongoose;


const Record = new Schema({
    title: String,
    message: {
        type: String,
        default: "testing project"
    },
    creator: {
        type: String,
        default: "Sid"
    },
    tags: {
        type: [String],
        default: ["#Vball", "#BBall"]
    },
    selectedFile: {
        type: String,
        default: ""
    },
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    expiredAt: {
        type: Date,
        default: new Date(),
    },
    place: {
        type: String,
        default: "Chantilly"
    },
    duration: {
        type: String,
        default: "2 hours"
    }
})

module.exports = model('Record', Record);