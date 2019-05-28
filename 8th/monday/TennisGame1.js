'use strict';

const TennisGame1 = function() {
    this.player1_score = 0;
    this.player2_score = 0;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === 'player1')
        this.player1_score += 1;
    else
        this.player2_score += 1;
};

TennisGame1.prototype.getScore = function() {
    let scorelist  = ['Love', 'Fifteen', 'Thirty', 'Forty'];
    let score = '';

    if (this.player1_score >= 4 && this.player1_score >= this.player2_score+2){
        score = "Win for player1"}
    else if (this.player2_score >= 4 && this.player2_score >= this.player1_score+2){
        score = "Win for player2"}
    else if (this.player1_score>=3 && this.player2_score>=3){
        if (this.player1_score===this.player2_score){score =  "Deuce"}
        else if (this.player1_score === this.player2_score +1){score = "Advantage player1"}
        else if (this.player2_score === this.player1_score +1){score = "Advantage player2"}}
    else if (this.player1_score === this.player2_score){
        score = scorelist[this.player1_score] + '-All'
    } else {
        score = scorelist[this.player1_score] +'-'+ scorelist[this.player2_score] 
    };
    
    return score;
};