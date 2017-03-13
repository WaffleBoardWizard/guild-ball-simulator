export default characters[{
  "Name": "Midas",
  "MeleeZone": 1,
  "Jog": 5,
  "TAC": 6,
  "KickDice": 3,
  "KickLength": 8,
  "Defense": 5,
  "Armor": 0,
  "InfluenceStart": 4,
  "InfluenceMax": 6,
  "IconUrl": "Midas",
  "Health": 14,
  "IcySponge": 7,
  "Season": 1,
  "Size": 30,
  "TeamId": 1,
  "id": 1,
  "traitIds": [1, 2, 3, 4, 5],
  "playIds": [1, 2, 3],
  "keywordIds": [1, 2, 3, 4, 5],
  "Sprint": "8",
  "Team": {
    "Name": "Alchemists",
    "IconUrl": "assets\\Alchemists.png",
    "id": 1
  },
  "Keywords": [{
    "Name": "Valentian",
    "id": 1
  }, {
    "Name": "Human",
    "id": 2
  }, {
    "Name": "Male",
    "id": 3
  }, {
    "Name": "Striker",
    "id": 4
  }, {
    "Name": "Captain",
    "id": 5
  }],
  "CharacterPlays": [{
    "Name": "Super Shot",
    "Description": "This model gains [+1 / +2”] KICK.",
    "Cost": "1",
    "Range": "S",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 1
  }, {
    "Name": "Lure of Gold",
    "Description": "",
    "Cost": "2,G",
    "Range": "6",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 2
  }, {
    "Name": "Midas Touch",
    "Description": "",
    "Cost": "G",
    "Range": "P",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 3
  }],
  "CharacterTraits": [{
    "Name": "Light Footed",
    "Description": "",
    "Stipulation": "",
    "id": 1,
    "type": "Character Trait"
  }, {
    "Name": "Unpredictable Movement",
    "Description": "",
    "Stipulation": "",
    "id": 2,
    "type": "Character Trait"
  }, {
    "Name": "Showboating",
    "Description": "",
    "Stipulation": "",
    "id": 3,
    "type": "Character Trait"
  }, {
    "Name": "Magnum Opus",
    "Description": "",
    "Stipulation": "",
    "id": 4,
    "type": "Legendary Play"
  }, {
    "Name": "Promise of Fortune",
    "Description": "",
    "Stipulation": "",
    "id": 5,
    "type": "Heroic Play"
  }],
  "PlayBookColumns": [{
    "ColumnNumber": 1,
    "id": 1,
    "CharacterId": 1,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 1,
      "PlaybookColumnId": 1,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 1,
        "id": 1,
        "Action": {
          "Name": "1 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 1,
          "Abbreviation": "1",
          "id": 7
        }
      }]
    }, {
      "Momentous": true,
      "id": 2,
      "PlaybookColumnId": 1,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 2,
        "PlaybookResultId": 2,
        "id": 2,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }, {
    "ColumnNumber": 2,
    "id": 2,
    "CharacterId": 1,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 3,
      "PlaybookColumnId": 2,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 3,
        "id": 3,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }]
    }, {
      "Momentous": false,
      "id": 4,
      "PlaybookColumnId": 2,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 4,
        "id": 4,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 2,
        "PlaybookResultId": 4,
        "id": 5,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }, {
    "ColumnNumber": 3,
    "id": 3,
    "CharacterId": 1,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 5,
      "PlaybookColumnId": 3,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 5,
        "id": 6,
        "Action": {
          "Name": "1 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 1,
          "Abbreviation": "1",
          "id": 7
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 5,
        "id": 7,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 2,
        "PlaybookActionId": 2,
        "PlaybookResultId": 5,
        "id": 8,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }, {
      "Momentous": true,
      "id": 6,
      "PlaybookColumnId": 3,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 3,
        "PlaybookResultId": 6,
        "id": 9,
        "Action": {
          "Name": "Character Play 1",
          "IconUrl": "cp1.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "G",
          "id": 3
        }
      }]
    }]
  }, {
    "ColumnNumber": 4,
    "id": 4,
    "CharacterId": 1,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 7,
      "PlaybookColumnId": 4,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 7,
        "id": 10,
        "Action": {
          "Name": "2 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 2,
          "Abbreviation": "2",
          "id": 8
        }
      }]
    }]
  }, {
    "ColumnNumber": 5,
    "id": 5,
    "CharacterId": 1,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 8,
      "PlaybookColumnId": 5,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 5,
        "PlaybookResultId": 8,
        "id": 11,
        "Action": {
          "Name": "Knock Down",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "KD",
          "id": 5
        }
      }]
    }, {
      "Momentous": true,
      "id": 9,
      "PlaybookColumnId": 5,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 9,
        "id": 12,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 9,
        "id": 13,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 2,
        "PlaybookActionId": 2,
        "PlaybookResultId": 9,
        "id": 14,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }, {
        "Order": 3,
        "PlaybookActionId": 2,
        "PlaybookResultId": 9,
        "id": 15,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }, {
    "ColumnNumber": 6,
    "id": 6,
    "CharacterId": 1,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 10,
      "PlaybookColumnId": 6,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 9,
        "PlaybookResultId": 10,
        "id": 16,
        "Action": {
          "Name": "3 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 3,
          "Abbreviation": "3",
          "id": 9
        }
      }]
    }, {
      "Momentous": true,
      "id": 11,
      "PlaybookColumnId": 6,
      "PlaybookResultActions": [{
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 11,
        "id": 17,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 2,
        "PlaybookActionId": 2,
        "PlaybookResultId": 11,
        "id": 18,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }, {
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 11,
        "id": 19,
        "Action": {
          "Name": "2 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 2,
          "Abbreviation": "2",
          "id": 8
        }
      }]
    }]
  }]
}, {
  "Name": "Smoke",
  "MeleeZone": 1,
  "Jog": 4,
  "TAC": 4,
  "KickDice": 4,
  "KickLength": 6,
  "Defense": 4,
  "Armor": 1,
  "InfluenceStart": 4,
  "InfluenceMax": 6,
  "IconUrl": "Smoke",
  "Health": 16,
  "IcySponge": 8,
  "Season": 2,
  "Size": 30,
  "TeamId": 1,
  "id": 2,
  "traitIds": [6, 7, 2, 8],
  "playIds": [4, 5, 6],
  "keywordIds": [6, 7, 8, 9, 10],
  "Sprint": "6",
  "Team": {
    "Name": "Alchemists",
    "IconUrl": "assets\\Alchemists.png",
    "id": 1
  },
  "Keywords": [{
    "Name": "Ethraynnian",
    "id": 6
  }, {
    "Name": " Human",
    "id": 7
  }, {
    "Name": " Female",
    "id": 8
  }, {
    "Name": " Defensive Midfielder",
    "id": 9
  }, {
    "Name": " Captain",
    "id": 10
  }],
  "CharacterPlays": [{
    "Name": "Smoke Bomb",
    "Description": "",
    "Cost": "1",
    "Range": "8",
    "Zone": "3A",
    "Sustain": true,
    "OPT": true,
    "id": 4
  }, {
    "Name": "Alchemy Mix",
    "Description": "",
    "Cost": "1",
    "Range": "8",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 5
  }, {
    "Name": "Chemical Breeze",
    "Description": "",
    "Cost": "1",
    "Range": "6",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 6
  }],
  "CharacterTraits": [{
    "Name": "Unpredictable Movement",
    "Description": "",
    "Stipulation": "",
    "id": 2,
    "type": "Character Trait"
  }, {
    "Name": "Cloud Jumper",
    "Description": "Once per turn during its activation, this model may choose an ongoing-effect AOE within [4”]. This model may be placed anywhere within the chosen ongoing-effect AOE",
    "Stipulation": "",
    "id": 6,
    "type": "Character Trait"
  }, {
    "Name": "Momentous Inspiration",
    "Description": "",
    "Stipulation": "4a",
    "id": 7,
    "type": "Character Trait"
  }, {
    "Name": "Chemical Shower",
    "Description": "",
    "Stipulation": "",
    "id": 8,
    "type": "Legendary Play"
  }],
  "PlayBookColumns": [{
    "ColumnNumber": 1,
    "id": 7,
    "CharacterId": 2,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 12,
      "PlaybookColumnId": 7,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 12,
        "id": 20,
        "Action": {
          "Name": "1 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 1,
          "Abbreviation": "1",
          "id": 7
        }
      }]
    }]
  }, {
    "ColumnNumber": 2,
    "id": 8,
    "CharacterId": 2,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 13,
      "PlaybookColumnId": 8,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 13,
        "id": 21,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }]
    }, {
      "Momentous": true,
      "id": 14,
      "PlaybookColumnId": 8,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 14,
        "id": 22,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }, {
    "ColumnNumber": 3,
    "id": 9,
    "CharacterId": 2,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 15,
      "PlaybookColumnId": 9,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 15,
        "id": 23,
        "Action": {
          "Name": "2 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 2,
          "Abbreviation": "2",
          "id": 8
        }
      }]
    }, {
      "Momentous": true,
      "id": 16,
      "PlaybookColumnId": 9,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 16,
        "id": 24,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 16,
        "id": 25,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }, {
    "ColumnNumber": 4,
    "id": 10,
    "CharacterId": 2,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 17,
      "PlaybookColumnId": 10,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 17,
        "id": 26,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }]
    }]
  }]
}, {
  "Name": "Flask",
  "MeleeZone": 1,
  "Jog": 5,
  "TAC": 2,
  "KickDice": 1,
  "KickLength": 4,
  "Defense": 3,
  "Armor": 2,
  "InfluenceStart": 1,
  "InfluenceMax": 2,
  "IconUrl": "Flask",
  "Health": 8,
  "IcySponge": 4,
  "Season": 1,
  "Size": 30,
  "TeamId": 1,
  "id": 3,
  "traitIds": [1, 9, 10],
  "playIds": [7],
  "keywordIds": [11, 12, 13],
  "Sprint": "7",
  "Team": {
    "Name": "Alchemists",
    "IconUrl": "assets\\Alchemists.png",
    "id": 1
  },
  "Keywords": [{
    "Name": "Indar",
    "id": 11
  }, {
    "Name": "Mechanica",
    "id": 12
  }, {
    "Name": "Mascot",
    "id": 13
  }],
  "CharacterPlays": [{
    "Name": "Intensify",
    "Description": "",
    "Cost": "",
    "Range": "",
    "Zone": "",
    "Sustain": false,
    "OPT": false,
    "id": 7
  }],
  "CharacterTraits": [{
    "Name": "Light Footed",
    "Description": "",
    "Stipulation": "",
    "id": 1,
    "type": "Character Trait"
  }, {
    "Name": "Overheat",
    "Description": "",
    "Stipulation": "3p",
    "id": 9,
    "type": "Character Trait"
  }, {
    "Name": "Smoke Cloud",
    "Description": "",
    "Stipulation": "",
    "id": 10,
    "type": "Character Trait"
  }],
  "PlayBookColumns": [{
    "ColumnNumber": 1,
    "id": 11,
    "CharacterId": 3,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 18,
      "PlaybookColumnId": 11,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 18,
        "id": 27,
        "Action": {
          "Name": "1 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 1,
          "Abbreviation": "1",
          "id": 7
        }
      }]
    }, {
      "Momentous": true,
      "id": 19,
      "PlaybookColumnId": 11,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 3,
        "PlaybookResultId": 19,
        "id": 28,
        "Action": {
          "Name": "Character Play 1",
          "IconUrl": "cp1.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "G",
          "id": 3
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 19,
        "id": 29,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }, {
    "ColumnNumber": 2,
    "id": 12,
    "CharacterId": 3,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 20,
      "PlaybookColumnId": 12,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 20,
        "id": 30,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 20,
        "id": 31,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }, {
      "Momentous": true,
      "id": 21,
      "PlaybookColumnId": 12,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 21,
        "id": 32,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }]
    }]
  }]
}, {
  "Name": "Naja",
  "MeleeZone": 2,
  "Jog": 6,
  "TAC": 3,
  "KickDice": 1,
  "KickLength": 4,
  "Defense": 5,
  "Armor": 0,
  "InfluenceStart": 1,
  "InfluenceMax": 3,
  "IconUrl": "Naja",
  "Health": 7,
  "IcySponge": 4,
  "Season": 2,
  "Size": 30,
  "TeamId": 1,
  "id": 4,
  "traitIds": [11, 2, 12],
  "playIds": [8],
  "keywordIds": [11, 14, 13],
  "Sprint": "8",
  "Team": {
    "Name": "Alchemists",
    "IconUrl": "assets\\Alchemists.png",
    "id": 1
  },
  "Keywords": [{
    "Name": "Indar",
    "id": 11
  }, {
    "Name": "Mascot",
    "id": 13
  }, {
    "Name": "Animal",
    "id": 14
  }],
  "CharacterPlays": [{
    "Name": "Hypnosis",
    "Description": "",
    "Cost": "",
    "Range": "",
    "Zone": "",
    "Sustain": false,
    "OPT": false,
    "id": 8
  }],
  "CharacterTraits": [{
    "Name": "Unpredictable Movement",
    "Description": "",
    "Stipulation": "",
    "id": 2,
    "type": "Character Trait"
  }, {
    "Name": "Venomous Strike",
    "Description": "",
    "Stipulation": "",
    "id": 11,
    "type": "Character Trait"
  }, {
    "Name": "Assist",
    "Description": "",
    "Stipulation": "Venin",
    "id": 12,
    "type": "Character Trait"
  }],
  "PlayBookColumns": [{
    "ColumnNumber": 1,
    "id": 13,
    "CharacterId": 4,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 22,
      "PlaybookColumnId": 13,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 22,
        "id": 33,
        "Action": {
          "Name": "1 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 1,
          "Abbreviation": "1",
          "id": 7
        }
      }]
    }, {
      "Momentous": true,
      "id": 23,
      "PlaybookColumnId": 13,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 2,
        "PlaybookResultId": 23,
        "id": 34,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }, {
    "ColumnNumber": 2,
    "id": 14,
    "CharacterId": 4,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 24,
      "PlaybookColumnId": 14,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 3,
        "PlaybookResultId": 24,
        "id": 35,
        "Action": {
          "Name": "Character Play 1",
          "IconUrl": "cp1.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "G",
          "id": 3
        }
      }]
    }, {
      "Momentous": false,
      "id": 25,
      "PlaybookColumnId": 14,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 25,
        "id": 36,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }]
    }]
  }, {
    "ColumnNumber": 3,
    "id": 15,
    "CharacterId": 4,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 26,
      "PlaybookColumnId": 15,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 26,
        "id": 37,
        "Action": {
          "Name": "2 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 2,
          "Abbreviation": "2",
          "id": 8
        }
      }]
    }, {
      "Momentous": false,
      "id": 27,
      "PlaybookColumnId": 15,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 3,
        "PlaybookResultId": 27,
        "id": 38,
        "Action": {
          "Name": "Character Play 1",
          "IconUrl": "cp1.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "G",
          "id": 3
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 2,
        "PlaybookResultId": 27,
        "id": 39,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }]
}, {
  "Name": "Calculus",
  "MeleeZone": 1,
  "Jog": 5,
  "TAC": 4,
  "KickDice": 3,
  "KickLength": 6,
  "Defense": 4,
  "Armor": 1,
  "InfluenceStart": 2,
  "InfluenceMax": 4,
  "IconUrl": "Calculus",
  "Health": 15,
  "IcySponge": 8,
  "Season": 1,
  "Size": 30,
  "TeamId": 1,
  "id": 5,
  "traitIds": [13],
  "playIds": [9, 10],
  "keywordIds": [6, 2, 15, 16],
  "Sprint": "8",
  "Team": {
    "Name": "Alchemists",
    "IconUrl": "assets\\Alchemists.png",
    "id": 1
  },
  "Keywords": [{
    "Name": "Human",
    "id": 2
  }, {
    "Name": "Ethraynnian",
    "id": 6
  }, {
    "Name": "Female",
    "id": 15
  }, {
    "Name": "Central Midfielder",
    "id": 16
  }],
  "CharacterPlays": [{
    "Name": "Blind",
    "Description": "",
    "Cost": "1",
    "Range": "8",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 9
  }, {
    "Name": "Noxious Blast",
    "Description": "",
    "Cost": "2",
    "Range": "8",
    "Zone": "3A",
    "Sustain": true,
    "OPT": true,
    "id": 10
  }],
  "CharacterTraits": [{
    "Name": "Poisonous Fumes",
    "Description": "",
    "Stipulation": "1A",
    "id": 13,
    "type": "Character Trait"
  }],
  "PlayBookColumns": [{
    "ColumnNumber": 1,
    "id": 16,
    "CharacterId": 5,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 28,
      "PlaybookColumnId": 16,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 28,
        "id": 40,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }, {
      "Momentous": false,
      "id": 29,
      "PlaybookColumnId": 16,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 29,
        "id": 41,
        "Action": {
          "Name": "1 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 1,
          "Abbreviation": "1",
          "id": 7
        }
      }]
    }]
  }, {
    "ColumnNumber": 2,
    "id": 17,
    "CharacterId": 5,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 30,
      "PlaybookColumnId": 17,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 30,
        "id": 42,
        "Action": {
          "Name": "2 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 2,
          "Abbreviation": "2",
          "id": 8
        }
      }]
    }, {
      "Momentous": true,
      "id": 31,
      "PlaybookColumnId": 17,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 31,
        "id": 43,
        "Action": {
          "Name": "1 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 1,
          "Abbreviation": "1",
          "id": 7
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 31,
        "id": 44,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }, {
    "ColumnNumber": 3,
    "id": 18,
    "CharacterId": 5,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 32,
      "PlaybookColumnId": 18,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 32,
        "id": 45,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }]
    }, {
      "Momentous": true,
      "id": 33,
      "PlaybookColumnId": 18,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 33,
        "id": 46,
        "Action": {
          "Name": "2 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 2,
          "Abbreviation": "2",
          "id": 8
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 33,
        "id": 47,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 2,
        "PlaybookActionId": 2,
        "PlaybookResultId": 33,
        "id": 48,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }, {
    "ColumnNumber": 4,
    "id": 19,
    "CharacterId": 5,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 34,
      "PlaybookColumnId": 19,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 9,
        "PlaybookResultId": 34,
        "id": 49,
        "Action": {
          "Name": "3 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 3,
          "Abbreviation": "3",
          "id": 9
        }
      }]
    }]
  }]
}, {
  "Name": "Katalyst",
  "MeleeZone": 1,
  "Jog": 6,
  "TAC": 6,
  "KickDice": 26,
  "KickLength": 6,
  "Defense": 3,
  "Armor": 1,
  "InfluenceStart": 2,
  "InfluenceMax": 4,
  "IconUrl": "Katalyst",
  "Health": 27,
  "IcySponge": 15,
  "Season": 1,
  "Size": 40,
  "TeamId": 1,
  "id": 6,
  "traitIds": [14, 15, 16],
  "playIds": [11, 12],
  "keywordIds": [17, 2, 3, 16],
  "Sprint": "8",
  "Team": {
    "Name": "Alchemists",
    "IconUrl": "assets\\Alchemists.png",
    "id": 1
  },
  "Keywords": [{
    "Name": "Human",
    "id": 2
  }, {
    "Name": "Male",
    "id": 3
  }, {
    "Name": "Central Midfielder",
    "id": 16
  }, {
    "Name": "Skaldic",
    "id": 17
  }],
  "CharacterPlays": [{
    "Name": "External Combustion",
    "Description": "",
    "Cost": "gg",
    "Range": "p",
    "Zone": "2P",
    "Sustain": true,
    "OPT": true,
    "id": 11
  }, {
    "Name": "Seismic Kick",
    "Description": "",
    "Cost": "1",
    "Range": "S",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 12
  }],
  "CharacterTraits": [{
    "Name": "Buring Strike",
    "Description": "",
    "Stipulation": "",
    "id": 14,
    "type": "Character Trait"
  }, {
    "Name": "Pyromaniac",
    "Description": "",
    "Stipulation": "",
    "id": 15,
    "type": "Character Trait"
  }, {
    "Name": "Burning Effigy",
    "Description": "",
    "Stipulation": "",
    "id": 16,
    "type": "Character Trait"
  }],
  "PlayBookColumns": [{
    "ColumnNumber": 1,
    "id": 20,
    "CharacterId": 6,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 35,
      "PlaybookColumnId": 20,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 35,
        "id": 50,
        "Action": {
          "Name": "1 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 1,
          "Abbreviation": "1",
          "id": 7
        }
      }]
    }, {
      "Momentous": true,
      "id": 36,
      "PlaybookColumnId": 20,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 36,
        "id": 51,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }, {
    "ColumnNumber": 2,
    "id": 21,
    "CharacterId": 6,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 37,
      "PlaybookColumnId": 21,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 37,
        "id": 52,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }]
    }, {
      "Momentous": true,
      "id": 38,
      "PlaybookColumnId": 21,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 5,
        "PlaybookResultId": 38,
        "id": 53,
        "Action": {
          "Name": "Knock Down",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "KD",
          "id": 5
        }
      }]
    }]
  }, {
    "ColumnNumber": 3,
    "id": 22,
    "CharacterId": 6,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 39,
      "PlaybookColumnId": 22,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 39,
        "id": 54,
        "Action": {
          "Name": "2 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 2,
          "Abbreviation": "2",
          "id": 8
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 5,
        "PlaybookResultId": 39,
        "id": 55,
        "Action": {
          "Name": "Knock Down",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "KD",
          "id": 5
        }
      }]
    }, {
      "Momentous": false,
      "id": 40,
      "PlaybookColumnId": 22,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 40,
        "id": 56,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 40,
        "id": 57,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }, {
    "ColumnNumber": 4,
    "id": 23,
    "CharacterId": 6,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 41,
      "PlaybookColumnId": 23,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 41,
        "id": 58,
        "Action": {
          "Name": "2 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 2,
          "Abbreviation": "2",
          "id": 8
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 41,
        "id": 59,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 2,
        "PlaybookActionId": 1,
        "PlaybookResultId": 41,
        "id": 60,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }, {
    "ColumnNumber": 5,
    "id": 24,
    "CharacterId": 6,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 42,
      "PlaybookColumnId": 24,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 4,
        "PlaybookResultId": 42,
        "id": 61,
        "Action": {
          "Name": "Character Play 2",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "GG",
          "id": 4
        }
      }]
    }]
  }, {
    "ColumnNumber": 6,
    "id": 25,
    "CharacterId": 6,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 43,
      "PlaybookColumnId": 25,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 5,
        "PlaybookResultId": 43,
        "id": 62,
        "Action": {
          "Name": "Knock Down",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "KD",
          "id": 5
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 4,
        "PlaybookResultId": 43,
        "id": 63,
        "Action": {
          "Name": "Character Play 2",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "GG",
          "id": 4
        }
      }]
    }]
  }]
}, {
  "Name": "VETKatalyst",
  "MeleeZone": 2,
  "Jog": 5,
  "TAC": 8,
  "KickDice": 1,
  "KickLength": 4,
  "Defense": 2,
  "Armor": 1,
  "InfluenceStart": 2,
  "InfluenceMax": 2,
  "IconUrl": "VETKatalyst",
  "Health": 29,
  "IcySponge": 19,
  "Season": 2,
  "Size": 50,
  "TeamId": 1,
  "id": 7,
  "traitIds": [17, 18, 19, 20],
  "playIds": [7],
  "keywordIds": [17, 2, 3, 18, 19],
  "Sprint": "8",
  "Team": {
    "Name": "Alchemists",
    "IconUrl": "assets\\Alchemists.png",
    "id": 1
  },
  "Keywords": [{
    "Name": "Human",
    "id": 2
  }, {
    "Name": "Male",
    "id": 3
  }, {
    "Name": "Skaldic",
    "id": 17
  }, {
    "Name": "Attacking Midfielder",
    "id": 18
  }, {
    "Name": "Veteran",
    "id": 19
  }],
  "CharacterPlays": [{
    "Name": "Intensify",
    "Description": "",
    "Cost": "",
    "Range": "",
    "Zone": "",
    "Sustain": false,
    "OPT": false,
    "id": 7
  }],
  "CharacterTraits": [{
    "Name": "Furious",
    "Description": "",
    "Stipulation": "",
    "id": 17,
    "type": "Character Trait"
  }, {
    "Name": "Chemical Frenzy",
    "Description": "",
    "Stipulation": "Deteriorating",
    "id": 18,
    "type": "Character Trait"
  }, {
    "Name": "4",
    "Description": "",
    "Stipulation": "",
    "id": 19,
    "type": "Character Trait"
  }, {
    "Name": "Witness Me!",
    "Description": "",
    "Stipulation": "",
    "id": 20,
    "type": "Heroic Play"
  }],
  "PlayBookColumns": [{
    "ColumnNumber": 1,
    "id": 26,
    "CharacterId": 7,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 44,
      "PlaybookColumnId": 26,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 44,
        "id": 64,
        "Action": {
          "Name": "1 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 1,
          "Abbreviation": "1",
          "id": 7
        }
      }]
    }]
  }, {
    "ColumnNumber": 2,
    "id": 27,
    "CharacterId": 7,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 45,
      "PlaybookColumnId": 27,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 45,
        "id": 65,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }, {
    "ColumnNumber": 3,
    "id": 28,
    "CharacterId": 7,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 46,
      "PlaybookColumnId": 28,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 46,
        "id": 66,
        "Action": {
          "Name": "2 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 2,
          "Abbreviation": "2",
          "id": 8
        }
      }]
    }, {
      "Momentous": false,
      "id": 47,
      "PlaybookColumnId": 28,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 47,
        "id": 67,
        "Action": {
          "Name": "1 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 1,
          "Abbreviation": "1",
          "id": 7
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 3,
        "PlaybookResultId": 47,
        "id": 68,
        "Action": {
          "Name": "Character Play 1",
          "IconUrl": "cp1.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "G",
          "id": 3
        }
      }]
    }]
  }, {
    "ColumnNumber": 4,
    "id": 29,
    "CharacterId": 7,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 48,
      "PlaybookColumnId": 29,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 5,
        "PlaybookResultId": 48,
        "id": 69,
        "Action": {
          "Name": "Knock Down",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "KD",
          "id": 5
        }
      }]
    }, {
      "Momentous": false,
      "id": 49,
      "PlaybookColumnId": 29,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 49,
        "id": 70,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 49,
        "id": 71,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }, {
    "ColumnNumber": 5,
    "id": 30,
    "CharacterId": 7,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 50,
      "PlaybookColumnId": 30,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 50,
        "id": 72,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }]
    }, {
      "Momentous": false,
      "id": 51,
      "PlaybookColumnId": 30,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 9,
        "PlaybookResultId": 51,
        "id": 73,
        "Action": {
          "Name": "3 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 3,
          "Abbreviation": "3",
          "id": 9
        }
      }]
    }]
  }, {
    "ColumnNumber": 6,
    "id": 31,
    "CharacterId": 7,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 52,
      "PlaybookColumnId": 31,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 52,
        "id": 74,
        "Action": {
          "Name": "2 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 2,
          "Abbreviation": "2",
          "id": 8
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 3,
        "PlaybookResultId": 52,
        "id": 75,
        "Action": {
          "Name": "Character Play 1",
          "IconUrl": "cp1.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "G",
          "id": 3
        }
      }]
    }, {
      "Momentous": true,
      "id": 53,
      "PlaybookColumnId": 31,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 9,
        "PlaybookResultId": 53,
        "id": 76,
        "Action": {
          "Name": "3 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 3,
          "Abbreviation": "3",
          "id": 9
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 53,
        "id": 77,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 2,
        "PlaybookActionId": 1,
        "PlaybookResultId": 53,
        "id": 78,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }, {
    "ColumnNumber": 7,
    "id": 32,
    "CharacterId": 7,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 54,
      "PlaybookColumnId": 32,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 9,
        "PlaybookResultId": 54,
        "id": 79,
        "Action": {
          "Name": "3 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 3,
          "Abbreviation": "3",
          "id": 9
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 3,
        "PlaybookResultId": 54,
        "id": 80,
        "Action": {
          "Name": "Character Play 1",
          "IconUrl": "cp1.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "G",
          "id": 3
        }
      }]
    }]
  }, {
    "ColumnNumber": 8,
    "id": 33,
    "CharacterId": 7,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 55,
      "PlaybookColumnId": 33,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 9,
        "PlaybookResultId": 55,
        "id": 81,
        "Action": {
          "Name": "3 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 3,
          "Abbreviation": "3",
          "id": 9
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 5,
        "PlaybookResultId": 55,
        "id": 82,
        "Action": {
          "Name": "Knock Down",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "KD",
          "id": 5
        }
      }]
    }]
  }]
}, {
  "Name": "Mercury",
  "MeleeZone": 1,
  "Jog": 5,
  "TAC": 4,
  "KickDice": 4,
  "KickLength": 6,
  "Defense": 4,
  "Armor": 1,
  "InfluenceStart": 2,
  "InfluenceMax": 4,
  "IconUrl": "Mercury",
  "Health": 15,
  "IcySponge": 8,
  "Season": 1,
  "Size": 30,
  "TeamId": 1,
  "id": 8,
  "traitIds": [21, 22],
  "playIds": [13, 14],
  "keywordIds": [6, 2, 3, 16],
  "Sprint": "8",
  "Team": {
    "Name": "Alchemists",
    "IconUrl": "assets\\Alchemists.png",
    "id": 1
  },
  "Keywords": [{
    "Name": "Human",
    "id": 2
  }, {
    "Name": "Male",
    "id": 3
  }, {
    "Name": "Ethraynnian",
    "id": 6
  }, {
    "Name": "Central Midfielder",
    "id": 16
  }],
  "CharacterPlays": [{
    "Name": "Fire Blast",
    "Description": "",
    "Cost": "2",
    "Range": "8",
    "Zone": "A3",
    "Sustain": true,
    "OPT": true,
    "id": 13
  }, {
    "Name": "Flame Jet",
    "Description": "",
    "Cost": "2",
    "Range": "6",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 14
  }],
  "CharacterTraits": [{
    "Name": "Burning Spirit",
    "Description": "",
    "Stipulation": "1A",
    "id": 21,
    "type": "Character Trait"
  }, {
    "Name": "Tactical Advice",
    "Description": "",
    "Stipulation": "Flask",
    "id": 22,
    "type": "Character Trait"
  }],
  "PlayBookColumns": [{
    "ColumnNumber": 1,
    "id": 34,
    "CharacterId": 8,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 56,
      "PlaybookColumnId": 34,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 56,
        "id": 83,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }]
    }, {
      "Momentous": false,
      "id": 57,
      "PlaybookColumnId": 34,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 57,
        "id": 84,
        "Action": {
          "Name": "1 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 1,
          "Abbreviation": "1",
          "id": 7
        }
      }]
    }]
  }, {
    "ColumnNumber": 2,
    "id": 35,
    "CharacterId": 8,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 58,
      "PlaybookColumnId": 35,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 58,
        "id": 85,
        "Action": {
          "Name": "2 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 2,
          "Abbreviation": "2",
          "id": 8
        }
      }]
    }, {
      "Momentous": true,
      "id": 59,
      "PlaybookColumnId": 35,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 59,
        "id": 86,
        "Action": {
          "Name": "1 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 1,
          "Abbreviation": "1",
          "id": 7
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 59,
        "id": 87,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }, {
    "ColumnNumber": 3,
    "id": 36,
    "CharacterId": 8,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 60,
      "PlaybookColumnId": 36,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 60,
        "id": 88,
        "Action": {
          "Name": "2 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 2,
          "Abbreviation": "2",
          "id": 8
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 60,
        "id": 89,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 2,
        "PlaybookActionId": 1,
        "PlaybookResultId": 60,
        "id": 90,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }, {
    "ColumnNumber": 4,
    "id": 37,
    "CharacterId": 8,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 61,
      "PlaybookColumnId": 37,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 9,
        "PlaybookResultId": 61,
        "id": 91,
        "Action": {
          "Name": "3 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 3,
          "Abbreviation": "3",
          "id": 9
        }
      }]
    }]
  }]
}, {
  "Name": "Venin",
  "MeleeZone": 1,
  "Jog": 6,
  "TAC": 5,
  "KickDice": 2,
  "KickLength": 8,
  "Defense": 4,
  "Armor": 1,
  "InfluenceStart": 2,
  "InfluenceMax": 4,
  "IconUrl": "Venin",
  "Health": 16,
  "IcySponge": 10,
  "Season": 2,
  "Size": 30,
  "TeamId": 1,
  "id": 9,
  "traitIds": [13, 11, 23],
  "playIds": [15, 16],
  "keywordIds": [1, 2, 3, 18],
  "Sprint": "8",
  "Team": {
    "Name": "Alchemists",
    "IconUrl": "assets\\Alchemists.png",
    "id": 1
  },
  "Keywords": [{
    "Name": "Valentian",
    "id": 1
  }, {
    "Name": "Human",
    "id": 2
  }, {
    "Name": "Male",
    "id": 3
  }, {
    "Name": "Attacking Midfielder",
    "id": 18
  }],
  "CharacterPlays": [{
    "Name": "Melting Body",
    "Description": "",
    "Cost": "0",
    "Range": "S",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 15
  }, {
    "Name": "Sacrifical Puppet",
    "Description": "",
    "Cost": "1,G",
    "Range": "6",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 16
  }],
  "CharacterTraits": [{
    "Name": "Venomous Strike",
    "Description": "",
    "Stipulation": "",
    "id": 11,
    "type": "Character Trait"
  }, {
    "Name": "Poisonous Fumes",
    "Description": "",
    "Stipulation": "1A",
    "id": 13,
    "type": "Character Trait"
  }, {
    "Name": "Coagulation",
    "Description": "",
    "Stipulation": "3P",
    "id": 23,
    "type": "Heroic Play"
  }],
  "PlayBookColumns": [{
    "ColumnNumber": 1,
    "id": 38,
    "CharacterId": 9,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 62,
      "PlaybookColumnId": 38,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 62,
        "id": 92,
        "Action": {
          "Name": "1 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 1,
          "Abbreviation": "1",
          "id": 7
        }
      }]
    }]
  }, {
    "ColumnNumber": 2,
    "id": 39,
    "CharacterId": 9,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 63,
      "PlaybookColumnId": 39,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 63,
        "id": 93,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 7,
        "PlaybookResultId": 63,
        "id": 94,
        "Action": {
          "Name": "1 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 1,
          "Abbreviation": "1",
          "id": 7
        }
      }]
    }, {
      "Momentous": true,
      "id": 64,
      "PlaybookColumnId": 39,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 64,
        "id": 95,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 2,
        "PlaybookResultId": 64,
        "id": 96,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }, {
    "ColumnNumber": 3,
    "id": 40,
    "CharacterId": 9,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 65,
      "PlaybookColumnId": 40,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 65,
        "id": 97,
        "Action": {
          "Name": "2 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 2,
          "Abbreviation": "2",
          "id": 8
        }
      }]
    }, {
      "Momentous": true,
      "id": 66,
      "PlaybookColumnId": 40,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 3,
        "PlaybookResultId": 66,
        "id": 98,
        "Action": {
          "Name": "Character Play 1",
          "IconUrl": "cp1.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "G",
          "id": 3
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 2,
        "PlaybookResultId": 66,
        "id": 99,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }, {
    "ColumnNumber": 4,
    "id": 41,
    "CharacterId": 9,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 67,
      "PlaybookColumnId": 41,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 67,
        "id": 100,
        "Action": {
          "Name": "2 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 2,
          "Abbreviation": "2",
          "id": 8
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 67,
        "id": 101,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 2,
        "PlaybookActionId": 2,
        "PlaybookResultId": 67,
        "id": 102,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }, {
    "ColumnNumber": 5,
    "id": 42,
    "CharacterId": 9,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 68,
      "PlaybookColumnId": 42,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 9,
        "PlaybookResultId": 68,
        "id": 103,
        "Action": {
          "Name": "3 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 3,
          "Abbreviation": "3",
          "id": 9
        }
      }]
    }, {
      "Momentous": true,
      "id": 69,
      "PlaybookColumnId": 42,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 69,
        "id": 104,
        "Action": {
          "Name": "2 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 2,
          "Abbreviation": "2",
          "id": 8
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 3,
        "PlaybookResultId": 69,
        "id": 105,
        "Action": {
          "Name": "Character Play 1",
          "IconUrl": "cp1.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "G",
          "id": 3
        }
      }]
    }]
  }]
}, {
  "Name": "Vitriol",
  "MeleeZone": 2,
  "Jog": 6,
  "TAC": 5,
  "KickDice": 4,
  "KickLength": 8,
  "Defense": 5,
  "Armor": 0,
  "InfluenceStart": 2,
  "InfluenceMax": 4,
  "IconUrl": "Vitriol",
  "Health": 12,
  "IcySponge": 6,
  "Season": 1,
  "Size": 30,
  "TeamId": 1,
  "id": 10,
  "traitIds": [24, 25, 26],
  "playIds": [4, 17],
  "keywordIds": [17, 2, 15, 4],
  "Sprint": "9",
  "Team": {
    "Name": "Alchemists",
    "IconUrl": "assets\\Alchemists.png",
    "id": 1
  },
  "Keywords": [{
    "Name": "Human",
    "id": 2
  }, {
    "Name": "Striker",
    "id": 4
  }, {
    "Name": "Female",
    "id": 15
  }, {
    "Name": "Skaldic",
    "id": 17
  }],
  "CharacterPlays": [{
    "Name": "Smoke Bomb",
    "Description": "",
    "Cost": "1",
    "Range": "8",
    "Zone": "3A",
    "Sustain": true,
    "OPT": true,
    "id": 4
  }, {
    "Name": "Clone",
    "Description": "",
    "Cost": "2,GG",
    "Range": "s",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 17
  }],
  "CharacterTraits": [{
    "Name": "Cover of Darkness",
    "Description": "",
    "Stipulation": "",
    "id": 24,
    "type": "Character Trait"
  }, {
    "Name": "Skiled within Shadow",
    "Description": "",
    "Stipulation": "",
    "id": 25,
    "type": "Character Trait"
  }, {
    "Name": "Hidden Damage",
    "Description": "",
    "Stipulation": "",
    "id": 26,
    "type": "Character Trait"
  }],
  "PlayBookColumns": [{
    "ColumnNumber": 1,
    "id": 43,
    "CharacterId": 10,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 70,
      "PlaybookColumnId": 43,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 70,
        "id": 106,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }]
    }, {
      "Momentous": false,
      "id": 71,
      "PlaybookColumnId": 43,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 71,
        "id": 107,
        "Action": {
          "Name": "1 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 1,
          "Abbreviation": "1",
          "id": 7
        }
      }]
    }]
  }, {
    "ColumnNumber": 2,
    "id": 44,
    "CharacterId": 10,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 72,
      "PlaybookColumnId": 44,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 72,
        "id": 108,
        "Action": {
          "Name": "2 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 2,
          "Abbreviation": "2",
          "id": 8
        }
      }]
    }, {
      "Momentous": true,
      "id": 73,
      "PlaybookColumnId": 44,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 73,
        "id": 109,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 2,
        "PlaybookResultId": 73,
        "id": 110,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }, {
    "ColumnNumber": 3,
    "id": 45,
    "CharacterId": 10,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 74,
      "PlaybookColumnId": 45,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 4,
        "PlaybookResultId": 74,
        "id": 111,
        "Action": {
          "Name": "Character Play 2",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "GG",
          "id": 4
        }
      }]
    }]
  }, {
    "ColumnNumber": 4,
    "id": 46,
    "CharacterId": 10,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 75,
      "PlaybookColumnId": 46,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 9,
        "PlaybookResultId": 75,
        "id": 112,
        "Action": {
          "Name": "3 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 3,
          "Abbreviation": "3",
          "id": 9
        }
      }]
    }]
  }, {
    "ColumnNumber": 5,
    "id": 47,
    "CharacterId": 10,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 76,
      "PlaybookColumnId": 47,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 9,
        "PlaybookResultId": 76,
        "id": 113,
        "Action": {
          "Name": "3 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 3,
          "Abbreviation": "3",
          "id": 9
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 2,
        "PlaybookResultId": 76,
        "id": 114,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }, {
        "Order": 2,
        "PlaybookActionId": 2,
        "PlaybookResultId": 76,
        "id": 115,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }]
}, {
  "Name": "Tapper",
  "MeleeZone": 2,
  "Jog": 4,
  "TAC": 6,
  "KickDice": 3,
  "KickLength": 6,
  "Defense": 3,
  "Armor": 1,
  "InfluenceStart": 4,
  "InfluenceMax": 5,
  "IconUrl": "Tapper",
  "Health": 18,
  "IcySponge": 9,
  "Season": 1,
  "Size": 30,
  "TeamId": 2,
  "id": 11,
  "traitIds": [22, 27, 28],
  "playIds": [18, 19],
  "keywordIds": [20, 2, 3, 16, 10],
  "Sprint": "7",
  "Team": {
    "Name": "Brewers",
    "IconUrl": "assets\\Brewers.png",
    "id": 2
  },
  "Keywords": [{
    "Name": "Human",
    "id": 2
  }, {
    "Name": "Male",
    "id": 3
  }, {
    "Name": " Captain",
    "id": 10
  }, {
    "Name": "Central Midfielder",
    "id": 16
  }, {
    "Name": "Mald",
    "id": 20
  }],
  "CharacterPlays": [{
    "Name": "Marked Target",
    "Description": "",
    "Cost": "1,g",
    "Range": "8",
    "Zone": " ",
    "Sustain": true,
    "OPT": true,
    "id": 18
  }, {
    "Name": "Commanding Aura",
    "Description": "",
    "Cost": "2,gg",
    "Range": "s",
    "Zone": "4A",
    "Sustain": true,
    "OPT": true,
    "id": 19
  }],
  "CharacterTraits": [{
    "Name": "Tactical Advice",
    "Description": "",
    "Stipulation": "Flask",
    "id": 22,
    "type": "Character Trait"
  }, {
    "Name": "Tough Hide",
    "Description": "",
    "Stipulation": "",
    "id": 27,
    "type": "Character Trait"
  }, {
    "Name": "Old Jake's",
    "Description": "",
    "Stipulation": "",
    "id": 28,
    "type": "Heroic Play"
  }],
  "PlayBookColumns": [{
    "ColumnNumber": 1,
    "id": 48,
    "CharacterId": 11,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 77,
      "PlaybookColumnId": 48,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 3,
        "PlaybookResultId": 77,
        "id": 116,
        "Action": {
          "Name": "Character Play 1",
          "IconUrl": "cp1.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "G",
          "id": 3
        }
      }]
    }, {
      "Momentous": false,
      "id": 78,
      "PlaybookColumnId": 48,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 78,
        "id": 117,
        "Action": {
          "Name": "1 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 1,
          "Abbreviation": "1",
          "id": 7
        }
      }]
    }]
  }, {
    "ColumnNumber": 2,
    "id": 49,
    "CharacterId": 11,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 79,
      "PlaybookColumnId": 49,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 79,
        "id": 118,
        "Action": {
          "Name": "2 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 2,
          "Abbreviation": "2",
          "id": 8
        }
      }]
    }, {
      "Momentous": true,
      "id": 80,
      "PlaybookColumnId": 49,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 5,
        "PlaybookResultId": 80,
        "id": 119,
        "Action": {
          "Name": "Knock Down",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "KD",
          "id": 5
        }
      }]
    }]
  }, {
    "ColumnNumber": 3,
    "id": 50,
    "CharacterId": 11,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 81,
      "PlaybookColumnId": 50,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 81,
        "id": 120,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }, {
      "Momentous": false,
      "id": 82,
      "PlaybookColumnId": 50,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 82,
        "id": 121,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }]
    }]
  }, {
    "ColumnNumber": 4,
    "id": 51,
    "CharacterId": 11,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 83,
      "PlaybookColumnId": 51,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 4,
        "PlaybookResultId": 83,
        "id": 122,
        "Action": {
          "Name": "Character Play 2",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": "GG",
          "id": 4
        }
      }]
    }, {
      "Momentous": true,
      "id": 84,
      "PlaybookColumnId": 51,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 9,
        "PlaybookResultId": 84,
        "id": 123,
        "Action": {
          "Name": "3 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 3,
          "Abbreviation": "3",
          "id": 9
        }
      }]
    }]
  }, {
    "ColumnNumber": 5,
    "id": 52,
    "CharacterId": 11,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 85,
      "PlaybookColumnId": 52,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 85,
        "id": 124,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 85,
        "id": 125,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": true,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }]
}]
