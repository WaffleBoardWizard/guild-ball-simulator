export default [
  {
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
  "Influence" : 0,

  "IconUrl": "Midas",
  "Health": 14,
  "MaxHealth": 14,

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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 11,
        "id": 17,
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
        "PlaybookResultId": 11,
        "id": 18,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 2,
        "PlaybookActionId": 2,
        "PlaybookResultId": 11,
        "id": 19,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
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
  "Influence" : 0,

  "IconUrl": "Smoke",
  "Health": 16,
  "MaxHealth": 16,

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
      "Momentous": true,
      "id": 13,
      "PlaybookColumnId": 8,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 13,
        "id": 21,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }, {
      "Momentous": false,
      "id": 14,
      "PlaybookColumnId": 8,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 14,
        "id": 22,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
  "Influence" : 0,

  "IconUrl": "Flask",
  "Health": 8,
  "MaxHealth": 8,

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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
  "Influence" : 0,

  "IconUrl": "Naja",
  "Health": 7,
  "MaxHealth": 7,

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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
  "Influence" : 0,

  "IconUrl": "Calculus",
  "Health": 15,
  "MaxHealth": 15,

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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
  "KickDice": 2,
  "KickLength": 6,
  "Defense": 3,
  "Armor": 1,
  "InfluenceStart": 2,
  "InfluenceMax": 4,
  "Influence" : 0,

  "IconUrl": "Katalyst",
  "Health": 27,
  "MaxHealth": 27,

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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
  "Influence" : 0,

  "IconUrl": "VETKatalyst",
  "Health": 29,
  "MaxHealth": 29,

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
          "Damage": false,
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
          "Damage": false,
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
        "PlaybookActionId": 1,
        "PlaybookResultId": 48,
        "id": 69,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 48,
        "id": 70,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }, {
      "Momentous": false,
      "id": 49,
      "PlaybookColumnId": 29,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 5,
        "PlaybookResultId": 49,
        "id": 71,
        "Action": {
          "Name": "Knock Down",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "KD",
          "id": 5
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
  "Influence" : 0,

  "IconUrl": "Mercury",
  "Health": 15,
  "MaxHealth": 15,

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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
  "Influence" : 0,

  "IconUrl": "Venin",
  "Health": 16,
  "MaxHealth": 16,

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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
  "Influence" : 0,

  "IconUrl": "Vitriol",
  "Health": 12,
  "MaxHealth": 12,

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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
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
  "Influence" : 0,

  "IconUrl": "Tapper",
  "Health": 18,
  "MaxHealth": 18,

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
          "Damage": false,
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
          "Damage": false,
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
      "Momentous": false,
      "id": 81,
      "PlaybookColumnId": 50,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 81,
        "id": 120,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }]
    }, {
      "Momentous": true,
      "id": 82,
      "PlaybookColumnId": 50,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 82,
        "id": 121,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
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
          "Damage": false,
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
          "Damage": false,
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
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }]
}, {
  "Name": "Ballista",
  "MeleeZone": 1,
  "Jog": 5,
  "TAC": 6,
  "KickDice": 4,
  "KickLength": 6,
  "Defense": 3,
  "Armor": 1,
  "InfluenceStart": 4,
  "InfluenceMax": 6,
  "Influence" : 0,
  "IconUrl": "Ballista",
  "Health": 18,
  "MaxHealth" : 18,
  "IcySponge": 9,
  "Season": 1,
  "Size": 30,
  "TeamId": 4,
  "id": 12,
  "traitIds": [27, 7, 29],
  "playIds": [20, 21, 22],
  "keywordIds": [21, 7, 22, 9, 10],
  "Sprint": "8",
  "Team": {
    "Name": "Engineers",
    "IconUrl": "assets\\Engineers.png",
    "id": 4
  },
  "Keywords": [{
    "Name": " Human",
    "id": 7
  }, {
    "Name": " Defensive Midfielder",
    "id": 9
  }, {
    "Name": " Captain",
    "id": 10
  }, {
    "Name": "Figeon",
    "id": 21
  }, {
    "Name": " Male",
    "id": 22
  }],
  "CharacterPlays": [{
    "Name": "Second Wind",
    "Description": "When target friendly model next ends an activation it may make a Jog .",
    "Cost": "2",
    "Range": "4",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 20
  }, {
    "Name": "Deadbolt",
    "Description": "Target enemy model suffers a [2”] Push directly away from this model, the knocked-down condition and [3] DMG.",
    "Cost": "2",
    "Range": "8",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 21
  }, {
    "Name": "Minefield",
    "Description": "Enemy models starting an Advance within this aura or entering this aura as part of an Advance suffer [4] DMG. This aura only triggers once per Advance",
    "Cost": "2,gg",
    "Range": "S",
    "Zone": "4a",
    "Sustain": true,
    "OPT": true,
    "id": 22
  }],
  "CharacterTraits": [{
    "Name": "Momentous Inspiration",
    "Description": "",
    "Stipulation": "4a",
    "id": 7,
    "type": "Character Trait"
  }, {
    "Name": "Tough Hide",
    "Description": "",
    "Stipulation": "",
    "id": 27,
    "type": "Character Trait"
  }, {
    "Name": "Breach!",
    "Description": "During its activation, this model gains [+0”/+4] KICK and may make a Kick without spending Influence. When this model makes a Kick, the Kick ignores intervening models, cannot be intercepted, and all other models, except the receiving model, on the ball-path suffer the knocked-down condition.",
    "Stipulation": "",
    "id": 29,
    "type": "Legendary Play"
  }],
  "PlayBookColumns": [{
    "ColumnNumber": 1,
    "id": 53,
    "CharacterId": 12,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 86,
      "PlaybookColumnId": 53,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 86,
        "id": 126,
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
      "id": 87,
      "PlaybookColumnId": 53,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 87,
        "id": 127,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }]
    }]
  }, {
    "ColumnNumber": 2,
    "id": 54,
    "CharacterId": 12,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 88,
      "PlaybookColumnId": 54,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 88,
        "id": 128,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 88,
        "id": 129,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }, {
      "Momentous": true,
      "id": 89,
      "PlaybookColumnId": 54,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 2,
        "PlaybookResultId": 89,
        "id": 130,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }, {
    "ColumnNumber": 3,
    "id": 55,
    "CharacterId": 12,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 90,
      "PlaybookColumnId": 55,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 5,
        "PlaybookResultId": 90,
        "id": 131,
        "Action": {
          "Name": "Knock Down",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "KD",
          "id": 5
        }
      }]
    }, {
      "Momentous": true,
      "id": 91,
      "PlaybookColumnId": 55,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 91,
        "id": 132,
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
        "PlaybookResultId": 91,
        "id": 133,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 2,
        "PlaybookActionId": 1,
        "PlaybookResultId": 91,
        "id": 134,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }, {
    "ColumnNumber": 4,
    "id": 56,
    "CharacterId": 12,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 92,
      "PlaybookColumnId": 56,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 9,
        "PlaybookResultId": 92,
        "id": 135,
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
      "id": 93,
      "PlaybookColumnId": 56,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 4,
        "PlaybookResultId": 93,
        "id": 136,
        "Action": {
          "Name": "Character Play 2",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "GG",
          "id": 4
        }
      }]
    }]
  }, {
    "ColumnNumber": 5,
    "id": 57,
    "CharacterId": 12,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 94,
      "PlaybookColumnId": 57,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 5,
        "PlaybookResultId": 94,
        "id": 137,
        "Action": {
          "Name": "Knock Down",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "KD",
          "id": 5
        }
      }]
    }]
  }, {
    "ColumnNumber": 6,
    "id": 58,
    "CharacterId": 12,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 95,
      "PlaybookColumnId": 58,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 10,
        "PlaybookResultId": 95,
        "id": 138,
        "Action": {
          "Name": "4 Damage",
          "IconUrl": "",
          "Damage": true,
          "DamageValue": 4,
          "Abbreviation": "4",
          "id": 10
        }
      }]
    }, {
      "Momentous": true,
      "id": 96,
      "PlaybookColumnId": 58,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 9,
        "PlaybookResultId": 96,
        "id": 139,
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
        "PlaybookResultId": 96,
        "id": 140,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }]
}, {
  "Name": "Pin Vice",
  "MeleeZone": 1,
  "Jog": 7,
  "TAC": 6,
  "KickDice": 4,
  "KickLength": 6,
  "Defense": 5,
  "Armor": 0,
  "InfluenceStart": 4,
  "Influence" : 0,
  "InfluenceMax": 6,
  "IconUrl": "Pin Vice",
  "Health": 11,
  "MaxHealth": 11,

  "IcySponge": 6,
  "Season": 2,
  "Size": 30,
  "TeamId": 4,
  "id": 13,
  "traitIds": [30, 31, 32, 33],
  "playIds": [23, 24, 25],
  "keywordIds": [23, 7, 8, 24, 25, 10],
  "Sprint": "9",
  "Team": {
    "Name": "Engineers",
    "IconUrl": "assets\\Engineers.png",
    "id": 4
  },
  "Keywords": [{
    "Name": " Human",
    "id": 7
  }, {
    "Name": " Female",
    "id": 8
  }, {
    "Name": " Captain",
    "id": 10
  }, {
    "Name": "Erskirii",
    "id": 23
  }, {
    "Name": " Mechanica",
    "id": 24
  }, {
    "Name": " Striker",
    "id": 25
  }],
  "CharacterPlays": [{
    "Name": "Controller",
    "Description": "Target friendly [Mechanica] model. When this model’s activation ends, if the target model has not activated this turn it may take its activation next, if able to do so. At the end of target model’s activation it suffers [2] DMG.",
    "Cost": "3",
    "Range": "6",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 23
  }, {
    "Name": "Alternator",
    "Description": "Target friendly [Mechanica] model gains [+2”/+2”] MOV. At the end of target model’s activation it suffers [2] DMG.",
    "Cost": "1",
    "Range": "6",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 24
  }, {
    "Name": "Deletion",
    "Description": "Target friendly [Mechanica] model gains [+1] DMG to Character Plays that cause damage and Playbook damage results. The target model may also use Bonus Time! once during its activation without spending MP. At the end of the target model’s activation it suffers [2] DMG.",
    "Cost": "1",
    "Range": "6",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 25
  }],
  "CharacterTraits": [{
    "Name": "Close Control",
    "Description": "Once per turn this model may ignore the first Tackle Playbook result against it.",
    "Stipulation": "",
    "id": 30,
    "type": "Character Trait"
  }, {
    "Name": "Reanimate",
    "Description": "Once per turn when this model is reduced to 0 HP, before suffering the taken-out condition, recover [3] HP and remove all conditions.",
    "Stipulation": "",
    "id": 31,
    "type": "Character Trait"
  }, {
    "Name": "Well Oiled Machine",
    "Description": "Place an oil-token on each friendly [Mechanica] model. When a friendly [Mechanica] model receives a successful Pass, it may remove its oil-token to immediately make a Pass action without spending Influence. A model may not remove an oil-token after using a Teamwork Momentous action. Each unspent oil-token is removed at the end of the turn.",
    "Stipulation": "",
    "id": 32,
    "type": "Legendary Play"
  }, {
    "Name": "Mechanical Heart",
    "Description": "While this model is on the Pitch, other friendly Guild models gain the [Mechanica] Character Type.",
    "Stipulation": "",
    "id": 33,
    "type": "Heroic Play"
  }],
  "PlayBookColumns": [{
    "ColumnNumber": 1,
    "id": 59,
    "CharacterId": 13,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 97,
      "PlaybookColumnId": 59,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 97,
        "id": 141,
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
      "id": 98,
      "PlaybookColumnId": 59,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 2,
        "PlaybookResultId": 98,
        "id": 142,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }, {
    "ColumnNumber": 2,
    "id": 60,
    "CharacterId": 13,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 99,
      "PlaybookColumnId": 60,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 2,
        "PlaybookResultId": 99,
        "id": 143,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 2,
        "PlaybookResultId": 99,
        "id": 144,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }, {
      "Momentous": true,
      "id": 100,
      "PlaybookColumnId": 60,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 100,
        "id": 145,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }]
    }]
  }, {
    "ColumnNumber": 3,
    "id": 61,
    "CharacterId": 13,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 101,
      "PlaybookColumnId": 61,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 101,
        "id": 146,
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
      "id": 102,
      "PlaybookColumnId": 61,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 102,
        "id": 147,
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
        "PlaybookActionId": 2,
        "PlaybookResultId": 102,
        "id": 148,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }, {
    "ColumnNumber": 4,
    "id": 62,
    "CharacterId": 13,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 103,
      "PlaybookColumnId": 62,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 103,
        "id": 149,
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
        "PlaybookResultId": 103,
        "id": 150,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 2,
        "PlaybookActionId": 2,
        "PlaybookResultId": 103,
        "id": 151,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }, {
      "Momentous": true,
      "id": 104,
      "PlaybookColumnId": 62,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 104,
        "id": 152,
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
        "PlaybookActionId": 2,
        "PlaybookResultId": 104,
        "id": 153,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }, {
    "ColumnNumber": 5,
    "id": 63,
    "CharacterId": 13,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 105,
      "PlaybookColumnId": 63,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 5,
        "PlaybookResultId": 105,
        "id": 154,
        "Action": {
          "Name": "Knock Down",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "KD",
          "id": 5
        }
      }]
    }, {
      "Momentous": false,
      "id": 106,
      "PlaybookColumnId": 63,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 9,
        "PlaybookResultId": 106,
        "id": 155,
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
    "id": 64,
    "CharacterId": 13,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 107,
      "PlaybookColumnId": 64,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 9,
        "PlaybookResultId": 107,
        "id": 156,
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
        "PlaybookResultId": 107,
        "id": 157,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }, {
        "Order": 2,
        "PlaybookActionId": 2,
        "PlaybookResultId": 107,
        "id": 158,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }]
}, {
  "Name": "Mainspring",
  "MeleeZone": 1,
  "Jog": 6,
  "TAC": 2,
  "KickDice": 3,
  "KickLength": 4,
  "Defense": 4,
  "Armor": 1,
  "InfluenceStart": 1,
  "InfluenceMax": 3,
  "Influence" : 0,
  "IconUrl": "Mainspring",
  "Health": 7,
  "MaxHealth": 7,
  "IcySponge": 4,
  "Season": 1,
  "Size": 30,
  "TeamId": 4,
  "id": 14,
  "traitIds": [9, 34],
  "playIds": [26],
  "keywordIds": [11, 24, 26],
  "Sprint": "8",
  "Team": {
    "Name": "Engineers",
    "IconUrl": "assets\\Engineers.png",
    "id": 4
  },
  "Keywords": [{
    "Name": "Indar",
    "id": 11
  }, {
    "Name": " Mechanica",
    "id": 24
  }, {
    "Name": " Mascot",
    "id": 26
  }],
  "CharacterPlays": [{
    "Name": "Long Bomb",
    "Description": "When this model makes a Pass it gains [+0/+4”] KICK for the duration of the action. This Pass cannot be intercepted.",
    "Cost": "1",
    "Range": "S",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 26
  }],
  "CharacterTraits": [{
    "Name": "Overheat",
    "Description": "",
    "Stipulation": "3p",
    "id": 9,
    "type": "Character Trait"
  }, {
    "Name": "Launch Control",
    "Description": "Once per turn this model may use Long Bomb and make a Pass without spending Influence during its activation",
    "Stipulation": "",
    "id": 34,
    "type": "Character Trait"
  }],
  "PlayBookColumns": [{
    "ColumnNumber": 1,
    "id": 65,
    "CharacterId": 14,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 108,
      "PlaybookColumnId": 65,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 108,
        "id": 159,
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
      "id": 109,
      "PlaybookColumnId": 65,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 109,
        "id": 160,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }]
    }]
  }, {
    "ColumnNumber": 2,
    "id": 66,
    "CharacterId": 14,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 110,
      "PlaybookColumnId": 66,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 2,
        "PlaybookResultId": 110,
        "id": 161,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 2,
        "PlaybookResultId": 110,
        "id": 162,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }, {
      "Momentous": true,
      "id": 111,
      "PlaybookColumnId": 66,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 111,
        "id": 163,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }]
    }]
  }]
}, {
  "Name": "Mother",
  "MeleeZone": 1,
  "Jog": 5,
  "TAC": 3,
  "KickDice": 2,
  "KickLength": 4,
  "Defense": 4,
  "Armor": 1,
  "InfluenceStart": 1,
  "InfluenceMax": 3,
  "Influence" : 0,

  "IconUrl": "Mother",
  "Health": 9,
  "MaxHealth": 9,

  "IcySponge": 5,
  "Season": 1,
  "Size": 40,
  "TeamId": 4,
  "id": 15,
  "traitIds": [35, 36],
  "playIds": [27],
  "keywordIds": [23, 24, 26],
  "Sprint": "7",
  "Team": {
    "Name": "Engineers",
    "IconUrl": "assets\\Engineers.png",
    "id": 4
  },
  "Keywords": [{
    "Name": "Erskirii",
    "id": 23
  }, {
    "Name": " Mechanica",
    "id": 24
  }, {
    "Name": " Mascot",
    "id": 26
  }],
  "CharacterPlays": [{
    "Name": "Burrow",
    "Description": "Choose a friendly nest-marker. Place this model in base contact with the nest-marker then remove the nest-marker from the Pitch. This model may then immediately make an Attack without spending Influence.",
    "Cost": "1",
    "Range": "4",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 27
  }],
  "CharacterTraits": [{
    "Name": "Spider Nests",
    "Description": "Once per turn during this model’s activation, the Controlling Player may place a friendly 30mm nestmarker within [4”] of this model. Enemy models suffer [-1] die on TN tests while within 1” of one or more friendly nest-markers. A Player may have up to [3] friendly nest-markers on the Pitch at once.",
    "Stipulation": "",
    "id": 35,
    "type": "Character Trait"
  }, {
    "Name": "Webbing",
    "Description": "Once per turn during this model’s activation if there is a friendly nest-marker within 2” of a free-ball, this model may remove that nest-marker from the Pitch to gain possession of the ball-marker.",
    "Stipulation": "",
    "id": 36,
    "type": "Character Trait"
  }],
  "PlayBookColumns": [{
    "ColumnNumber": 1,
    "id": 67,
    "CharacterId": 15,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 112,
      "PlaybookColumnId": 67,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 112,
        "id": 164,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }]
    }, {
      "Momentous": false,
      "id": 113,
      "PlaybookColumnId": 67,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 113,
        "id": 165,
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
    "id": 68,
    "CharacterId": 15,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 114,
      "PlaybookColumnId": 68,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 114,
        "id": 166,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 2,
        "PlaybookResultId": 114,
        "id": 167,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }, {
    "ColumnNumber": 3,
    "id": 69,
    "CharacterId": 15,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 115,
      "PlaybookColumnId": 69,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 115,
        "id": 168,
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
      "id": 116,
      "PlaybookColumnId": 69,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 2,
        "PlaybookResultId": 116,
        "id": 169,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 2,
        "PlaybookResultId": 116,
        "id": 170,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }]
}, {
  "Name": "Hoist",
  "MeleeZone": 1,
  "Jog": 5,
  "TAC": 5,
  "KickDice": 4,
  "KickLength": 6,
  "Defense": 4,
  "Armor": 1,
  "InfluenceStart": 2,
  "InfluenceMax": 4,
  "Influence" : 0,

  "IconUrl": "Hoist",
  "Health": 11,
  "MaxHealth": 11,

  "IcySponge": 6,
  "Season": 2,
  "Size": 30,
  "TeamId": 4,
  "id": 16,
  "traitIds": [27, 31, 37],
  "playIds": [28],
  "keywordIds": [23, 24, 27],
  "Sprint": "7",
  "Team": {
    "Name": "Engineers",
    "IconUrl": "assets\\Engineers.png",
    "id": 4
  },
  "Keywords": [{
    "Name": "Erskirii",
    "id": 23
  }, {
    "Name": " Mechanica",
    "id": 24
  }, {
    "Name": " Attacking Midfielder",
    "id": 27
  }],
  "CharacterPlays": [{
    "Name": "True Replication",
    "Description": "Choose a Character Play on target friendly non- [Captain] Guild model’s card and replace this Character Play with it for the rest of the turn.",
    "Cost": "0",
    "Range": "6",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 28
  }],
  "CharacterTraits": [{
    "Name": "Tough Hide",
    "Description": "",
    "Stipulation": "",
    "id": 27,
    "type": "Character Trait"
  }, {
    "Name": "Reanimate",
    "Description": "Once per turn when this model is reduced to 0 HP, before suffering the taken-out condition, recover [3] HP and remove all conditions.",
    "Stipulation": "",
    "id": 31,
    "type": "Character Trait"
  }, {
    "Name": "Sturdy",
    "Description": "Once per turn this model may ignore the first knocked-down condition placed upon it",
    "Stipulation": "",
    "id": 37,
    "type": "Character Trait"
  }],
  "PlayBookColumns": [{
    "ColumnNumber": 1,
    "id": 70,
    "CharacterId": 16,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 117,
      "PlaybookColumnId": 70,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 117,
        "id": 171,
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
      "id": 118,
      "PlaybookColumnId": 70,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 118,
        "id": 172,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }]
    }]
  }, {
    "ColumnNumber": 2,
    "id": 71,
    "CharacterId": 16,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 119,
      "PlaybookColumnId": 71,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 3,
        "PlaybookResultId": 119,
        "id": 173,
        "Action": {
          "Name": "Character Play 1",
          "IconUrl": "cp1.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "G",
          "id": 3
        }
      }]
    }, {
      "Momentous": true,
      "id": 120,
      "PlaybookColumnId": 71,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 120,
        "id": 174,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 2,
        "PlaybookResultId": 120,
        "id": 175,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }, {
    "ColumnNumber": 3,
    "id": 72,
    "CharacterId": 16,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 121,
      "PlaybookColumnId": 72,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 121,
        "id": 176,
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
      "id": 122,
      "PlaybookColumnId": 72,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 122,
        "id": 177,
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
        "PlaybookResultId": 122,
        "id": 178,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }, {
    "ColumnNumber": 4,
    "id": 73,
    "CharacterId": 16,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 123,
      "PlaybookColumnId": 73,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 4,
        "PlaybookResultId": 123,
        "id": 179,
        "Action": {
          "Name": "Character Play 2",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "GG",
          "id": 4
        }
      }]
    }, {
      "Momentous": true,
      "id": 124,
      "PlaybookColumnId": 73,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 2,
        "PlaybookResultId": 124,
        "id": 180,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 2,
        "PlaybookResultId": 124,
        "id": 181,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }, {
    "ColumnNumber": 5,
    "id": 74,
    "CharacterId": 16,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 125,
      "PlaybookColumnId": 74,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 9,
        "PlaybookResultId": 125,
        "id": 182,
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
      "id": 126,
      "PlaybookColumnId": 74,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 126,
        "id": 183,
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
        "PlaybookResultId": 126,
        "id": 184,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 2,
        "PlaybookActionId": 2,
        "PlaybookResultId": 126,
        "id": 185,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }]
}, {
  "Name": "Colossus",
  "MeleeZone": 2,
  "Jog": 6,
  "TAC": 5,
  "KickDice": 4,
  "KickLength": 6,
  "Defense": 2,
  "Armor": 2,
  "InfluenceStart": 2,
  "InfluenceMax": 3,
  "Influence" : 0,

  "IconUrl": "Colossus",
  "Health": 20,
  "MaxHealth": 20,

  "IcySponge": 10,
  "Season": 1,
  "Size": 50,
  "TeamId": 4,
  "id": 17,
  "traitIds": [30, 1, 27, 38, 39],
  "playIds": [29, 30],
  "keywordIds": [28, 7, 22, 24, 29],
  "Sprint": "8",
  "Team": {
    "Name": "Engineers",
    "IconUrl": "assets\\Engineers.png",
    "id": 4
  },
  "Keywords": [{
    "Name": " Human",
    "id": 7
  }, {
    "Name": " Male",
    "id": 22
  }, {
    "Name": " Mechanica",
    "id": 24
  }, {
    "Name": "Raed",
    "id": 28
  }, {
    "Name": " Central Midfielder",
    "id": 29
  }],
  "CharacterPlays": [{
    "Name": "Unexpected Arrival",
    "Description": "Enemy models within the pulse suffer a [4”] Push directly away from this model.",
    "Cost": "gg",
    "Range": "s",
    "Zone": "3p",
    "Sustain": true,
    "OPT": true,
    "id": 29
  }, {
    "Name": "Singled Out",
    "Description": "Friendly models gain [+2] TAC against target enemy model.",
    "Cost": "g",
    "Range": "p",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 30
  }],
  "CharacterTraits": [{
    "Name": "Light Footed",
    "Description": "",
    "Stipulation": "",
    "id": 1,
    "type": "Character Trait"
  }, {
    "Name": "Tough Hide",
    "Description": "",
    "Stipulation": "",
    "id": 27,
    "type": "Character Trait"
  }, {
    "Name": "Close Control",
    "Description": "Once per turn this model may ignore the first Tackle Playbook result against it.",
    "Stipulation": "",
    "id": 30,
    "type": "Character Trait"
  }, {
    "Name": "Long Legs",
    "Description": "If this model starts its activation, or moves within [2”] of a free-ball, it may choose to take possession of the ballmarker. If the ball-marker is placed within [2”] of this model, it may choose to take possession of the ball-marker",
    "Stipulation": "",
    "id": 38,
    "type": "Character Trait"
  }, {
    "Name": "Stoic",
    "Description": "Once per turn this model may ignore the first Push that it suffers.",
    "Stipulation": "",
    "id": 39,
    "type": "Heroic Play"
  }],
  "PlayBookColumns": [{
    "ColumnNumber": 1,
    "id": 75,
    "CharacterId": 17,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 127,
      "PlaybookColumnId": 75,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 3,
        "PlaybookResultId": 127,
        "id": 186,
        "Action": {
          "Name": "Character Play 1",
          "IconUrl": "cp1.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "G",
          "id": 3
        }
      }]
    }, {
      "Momentous": false,
      "id": 128,
      "PlaybookColumnId": 75,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 128,
        "id": 187,
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
    "id": 76,
    "CharacterId": 17,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 129,
      "PlaybookColumnId": 76,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 129,
        "id": 188,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }]
    }, {
      "Momentous": true,
      "id": 130,
      "PlaybookColumnId": 76,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 5,
        "PlaybookResultId": 130,
        "id": 189,
        "Action": {
          "Name": "Knock Down",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "KD",
          "id": 5
        }
      }]
    }]
  }, {
    "ColumnNumber": 3,
    "id": 77,
    "CharacterId": 17,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 131,
      "PlaybookColumnId": 77,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 131,
        "id": 190,
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
      "id": 132,
      "PlaybookColumnId": 77,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 5,
        "PlaybookResultId": 132,
        "id": 191,
        "Action": {
          "Name": "Knock Down",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "KD",
          "id": 5
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 132,
        "id": 192,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }, {
    "ColumnNumber": 4,
    "id": 78,
    "CharacterId": 17,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 133,
      "PlaybookColumnId": 78,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 9,
        "PlaybookResultId": 133,
        "id": 193,
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
      "id": 134,
      "PlaybookColumnId": 78,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 4,
        "PlaybookResultId": 134,
        "id": 194,
        "Action": {
          "Name": "Character Play 2",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "GG",
          "id": 4
        }
      }]
    }]
  }, {
    "ColumnNumber": 5,
    "id": 79,
    "CharacterId": 17,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 135,
      "PlaybookColumnId": 79,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 135,
        "id": 195,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 135,
        "id": 196,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 2,
        "PlaybookActionId": 1,
        "PlaybookResultId": 135,
        "id": 197,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }]
}, {
  "Name": "Ratchet",
  "MeleeZone": 1,
  "Jog": 5,
  "TAC": 5,
  "KickDice": 4,
  "KickLength": 6,
  "Defense": 3,
  "Armor": 1,
  "InfluenceStart": 2,
  "InfluenceMax": 4,
  "Influence" : 0,

  "IconUrl": "Ratchet",
  "MaxHealth": 17,
  "Health": 17,
  "IcySponge": 9,
  "Season": 1,
  "Size": 30,
  "TeamId": 4,
  "id": 18,
  "traitIds": [40, 41, 42],
  "playIds": [31, 26, 32],
  "keywordIds": [11, 7, 22, 9],
  "Sprint": "8",
  "Team": {
    "Name": "Engineers",
    "IconUrl": "assets\\Engineers.png",
    "id": 4
  },
  "Keywords": [{
    "Name": " Human",
    "id": 7
  }, {
    "Name": " Defensive Midfielder",
    "id": 9
  }, {
    "Name": "Indar",
    "id": 11
  }, {
    "Name": " Male",
    "id": 22
  }],
  "CharacterPlays": [{
    "Name": "Long Bomb",
    "Description": "When this model makes a Pass it gains [+0/+4”] KICK for the duration of the action. This Pass cannot be intercepted.",
    "Cost": "1",
    "Range": "S",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 26
  }, {
    "Name": "Tooled Up",
    "Description": "Target friendly Guild model gains [+1] DMG to Character Plays that cause damage and Playbook damage results.",
    "Cost": "1",
    "Range": "4",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 31
  }, {
    "Name": "Blast Earth",
    "Description": "All models hit suffer [2] DMG. This ongoing-effect AOE is rough-ground.",
    "Cost": "2",
    "Range": "10",
    "Zone": "3a",
    "Sustain": true,
    "OPT": true,
    "id": 32
  }],
  "CharacterTraits": [{
    "Name": "Fixer",
    "Description": "Once per turn remove all conditions from target friendly [Mechanica] model that is within 4” of this model.",
    "Stipulation": "",
    "id": 40,
    "type": "Character Trait"
  }, {
    "Name": "Creation",
    "Description": "If the friendly named model is suffering the taken-out condition, remove the taken-out condition from the friendly named model and place it in base contact with this model with full HP. The friendly named model can activate as normal.",
    "Stipulation": "Mainspring",
    "id": 41,
    "type": "Legendary Play"
  }, {
    "Name": "Overclocked",
    "Description": "Choose a target friendly [Mechanica] model within [4”], it may Sprint or Charge without spending Influence in its next activation.",
    "Stipulation": "",
    "id": 42,
    "type": "Heroic Play"
  }],
  "PlayBookColumns": [{
    "ColumnNumber": 1,
    "id": 80,
    "CharacterId": 18,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 136,
      "PlaybookColumnId": 80,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 136,
        "id": 198,
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
    "id": 81,
    "CharacterId": 18,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 137,
      "PlaybookColumnId": 81,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 137,
        "id": 199,
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
      "id": 138,
      "PlaybookColumnId": 81,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 138,
        "id": 200,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }, {
    "ColumnNumber": 3,
    "id": 82,
    "CharacterId": 18,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 139,
      "PlaybookColumnId": 82,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 139,
        "id": 201,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }]
    }, {
      "Momentous": true,
      "id": 140,
      "PlaybookColumnId": 82,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 140,
        "id": 202,
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
        "PlaybookResultId": 140,
        "id": 203,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }, {
    "ColumnNumber": 4,
    "id": 83,
    "CharacterId": 18,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 141,
      "PlaybookColumnId": 83,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 5,
        "PlaybookResultId": 141,
        "id": 204,
        "Action": {
          "Name": "Knock Down",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "KD",
          "id": 5
        }
      }]
    }]
  }, {
    "ColumnNumber": 5,
    "id": 84,
    "CharacterId": 18,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 142,
      "PlaybookColumnId": 84,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 142,
        "id": 205,
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
        "PlaybookResultId": 142,
        "id": 206,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 2,
        "PlaybookActionId": 1,
        "PlaybookResultId": 142,
        "id": 207,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }, {
      "Momentous": false,
      "id": 143,
      "PlaybookColumnId": 84,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 9,
        "PlaybookResultId": 143,
        "id": 208,
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
  "Name": "Salvo",
  "MeleeZone": 1,
  "Jog": 6,
  "TAC": 5,
  "KickDice": 3,
  "KickLength": 8,
  "Defense": 4,
  "Armor": 1,
  "InfluenceStart": 2,
  "InfluenceMax": 4,
  "Influence" : 0,

  "IconUrl": "Salvo",
  "Health": 14,
  "MaxHealth": 14,

  "IcySponge": 6,
  "Season": 1,
  "Size": 30,
  "TeamId": 4,
  "id": 19,
  "traitIds": [43, 44],
  "playIds": [33, 34, 35],
  "keywordIds": [6, 7, 22, 30],
  "Sprint": "8",
  "Team": {
    "Name": "Engineers",
    "IconUrl": "assets\\Engineers.png",
    "id": 4
  },
  "Keywords": [{
    "Name": "Ethraynnian",
    "id": 6
  }, {
    "Name": " Human",
    "id": 7
  }, {
    "Name": " Male",
    "id": 22
  }, {
    "Name": " Winger",
    "id": 30
  }],
  "CharacterPlays": [{
    "Name": "Flurry",
    "Description": "Target enemy model suffers [2] DMG. All other models within this pulse suffer [2] DMG.",
    "Cost": "2",
    "Range": "8",
    "Zone": "2p",
    "Sustain": true,
    "OPT": true,
    "id": 33
  }, {
    "Name": "Arrow to the Knee",
    "Description": "Target enemy model suffers [-2/-2”] KICK and [2] DMG.",
    "Cost": "2",
    "Range": "8",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 34
  }, {
    "Name": "Tether Ball",
    "Description": "Target free-ball is immediately placed in possession of this model.",
    "Cost": "2",
    "Range": "6",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 35
  }],
  "CharacterTraits": [{
    "Name": "Swift Strikes",
    "Description": "This model may make a [1”] Dodge after causing damage to one or more enemy models.",
    "Stipulation": "",
    "id": 43,
    "type": "Character Trait"
  }, {
    "Name": "Lock & Loaded",
    "Description": "The next time this model uses a Character Play this turn it may do so without spending Influence.",
    "Stipulation": "",
    "id": 44,
    "type": "Heroic Play"
  }],
  "PlayBookColumns": [{
    "ColumnNumber": 1,
    "id": 85,
    "CharacterId": 19,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 144,
      "PlaybookColumnId": 85,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 144,
        "id": 209,
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
      "id": 145,
      "PlaybookColumnId": 85,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 2,
        "PlaybookResultId": 145,
        "id": 210,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }, {
    "ColumnNumber": 2,
    "id": 86,
    "CharacterId": 19,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 146,
      "PlaybookColumnId": 86,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 2,
        "PlaybookResultId": 146,
        "id": 211,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 2,
        "PlaybookResultId": 146,
        "id": 212,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }, {
      "Momentous": true,
      "id": 147,
      "PlaybookColumnId": 86,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 147,
        "id": 213,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }]
    }]
  }, {
    "ColumnNumber": 3,
    "id": 87,
    "CharacterId": 19,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 148,
      "PlaybookColumnId": 87,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 148,
        "id": 214,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 2,
        "PlaybookResultId": 148,
        "id": 215,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }, {
    "ColumnNumber": 4,
    "id": 88,
    "CharacterId": 19,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 149,
      "PlaybookColumnId": 88,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 149,
        "id": 216,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 149,
        "id": 217,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 2,
        "PlaybookActionId": 2,
        "PlaybookResultId": 149,
        "id": 218,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }, {
    "ColumnNumber": 5,
    "id": 89,
    "CharacterId": 19,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 150,
      "PlaybookColumnId": 89,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 150,
        "id": 219,
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
  "Name": "Velocity",
  "MeleeZone": 1,
  "Jog": 6,
  "TAC": 4,
  "KickDice": 4,
  "KickLength": 8,
  "Defense": 5,
  "Armor": 0,
  "InfluenceStart": 2,
  "InfluenceMax": 4,
  "Influence" : 0,

  "IconUrl": "Velocity",
  "Health": 11,
  "MaxHealth": 11,

  "IcySponge": 6,
  "Season": 1,
  "Size": 30,
  "TeamId": 4,
  "id": 20,
  "traitIds": [30, 31],
  "playIds": [36, 37],
  "keywordIds": [6, 24, 25],
  "Sprint": "8",
  "Team": {
    "Name": "Engineers",
    "IconUrl": "assets\\Engineers.png",
    "id": 4
  },
  "Keywords": [{
    "Name": "Ethraynnian",
    "id": 6
  }, {
    "Name": " Mechanica",
    "id": 24
  }, {
    "Name": " Striker",
    "id": 25
  }],
  "CharacterPlays": [{
    "Name": "Nimble",
    "Description": "This model gains [+1] DEF",
    "Cost": "1",
    "Range": "s",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 36
  }, {
    "Name": "Acrobatic",
    "Description": "This model may make a [2”] Dodge.",
    "Cost": "1",
    "Range": "s",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 37
  }],
  "CharacterTraits": [{
    "Name": "Close Control",
    "Description": "Once per turn this model may ignore the first Tackle Playbook result against it.",
    "Stipulation": "",
    "id": 30,
    "type": "Character Trait"
  }, {
    "Name": "Reanimate",
    "Description": "Once per turn when this model is reduced to 0 HP, before suffering the taken-out condition, recover [3] HP and remove all conditions.",
    "Stipulation": "",
    "id": 31,
    "type": "Character Trait"
  }],
  "PlayBookColumns": [{
    "ColumnNumber": 1,
    "id": 90,
    "CharacterId": 20,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 151,
      "PlaybookColumnId": 90,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 151,
        "id": 220,
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
      "id": 152,
      "PlaybookColumnId": 90,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 152,
        "id": 221,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }]
    }]
  }, {
    "ColumnNumber": 2,
    "id": 91,
    "CharacterId": 20,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 153,
      "PlaybookColumnId": 91,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 2,
        "PlaybookResultId": 153,
        "id": 222,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 2,
        "PlaybookResultId": 153,
        "id": 223,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }, {
      "Momentous": true,
      "id": 154,
      "PlaybookColumnId": 91,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 154,
        "id": 224,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 2,
        "PlaybookResultId": 154,
        "id": 225,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }, {
    "ColumnNumber": 3,
    "id": 92,
    "CharacterId": 20,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 155,
      "PlaybookColumnId": 92,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 2,
        "PlaybookResultId": 155,
        "id": 226,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 2,
        "PlaybookResultId": 155,
        "id": 227,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }, {
      "Momentous": true,
      "id": 156,
      "PlaybookColumnId": 92,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 156,
        "id": 228,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 2,
        "PlaybookResultId": 156,
        "id": 229,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }, {
        "Order": 2,
        "PlaybookActionId": 2,
        "PlaybookResultId": 156,
        "id": 230,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }, {
    "ColumnNumber": 4,
    "id": 93,
    "CharacterId": 20,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 157,
      "PlaybookColumnId": 93,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 157,
        "id": 231,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 157,
        "id": 232,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 2,
        "PlaybookActionId": 2,
        "PlaybookResultId": 157,
        "id": 233,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }, {
        "Order": 3,
        "PlaybookActionId": 2,
        "PlaybookResultId": 157,
        "id": 234,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }]
}, {
  "Name": "VETVelocity",
  "MeleeZone": 1,
  "Jog": 6,
  "TAC": 5,
  "KickDice": 4,
  "KickLength": 6,
  "Defense": 4,
  "Armor": 1,
  "InfluenceStart": 2,
  "InfluenceMax": 4,
  "Influence" : 0,

  "IconUrl": "VETVelocity",
  "Health": 14,
  "MaxHealth": 14,

  "IcySponge": 6,
  "Season": 2,
  "Size": 30,
  "TeamId": 4,
  "id": 21,
  "traitIds": [45, 46, 47],
  "playIds": [38, 39],
  "keywordIds": [6, 24, 31, 32],
  "Sprint": "8",
  "Team": {
    "Name": "Engineers",
    "IconUrl": "assets\\Engineers.png",
    "id": 4
  },
  "Keywords": [{
    "Name": "Ethraynnian",
    "id": 6
  }, {
    "Name": " Mechanica",
    "id": 24
  }, {
    "Name": " Goalkeeper",
    "id": 31
  }, {
    "Name": " Veteran",
    "id": 32
  }],
  "CharacterPlays": [{
    "Name": "Agressive Defence",
    "Description": "This model gains [+2] TAC.",
    "Cost": "1",
    "Range": "s",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 38
  }, {
    "Name": "Smashed Shins",
    "Description": "Target enemy model suffers [-4/-4”] KICK.",
    "Cost": "g",
    "Range": "p",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 39
  }],
  "CharacterTraits": [{
    "Name": "Goal Defence",
    "Description": "Enemy models suffer [+1] TN to Shots while this model is within [4”] of a friendly goal-post.",
    "Stipulation": "",
    "id": 45,
    "type": "Character Trait"
  }, {
    "Name": "Hundred Hand Stance",
    "Description": "While this model is within [4”] of the friendly goalpost, immediately after an enemy model fails a Shot, this model may gain possession of the ball-marker",
    "Stipulation": "",
    "id": 46,
    "type": "Character Trait"
  }, {
    "Name": "Fly Keeper",
    "Description": "During the Maintenance Phase, this model may choose to lose Goal Defence and Hundred Hand Stance and gain [+1”/+1”] MOV and Unpredictable Movement for the remainder of the turn. (Unpredictable Movement: Once per turn when an enemy model ends an Advance in this model’s melee zone, this model may immediately make a [2”] Dodge.)",
    "Stipulation": "",
    "id": 47,
    "type": "Character Trait"
  }],
  "PlayBookColumns": [{
    "ColumnNumber": 1,
    "id": 94,
    "CharacterId": 21,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 158,
      "PlaybookColumnId": 94,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 2,
        "PlaybookResultId": 158,
        "id": 235,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }, {
      "Momentous": false,
      "id": 159,
      "PlaybookColumnId": 94,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 159,
        "id": 236,
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
    "id": 95,
    "CharacterId": 21,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 160,
      "PlaybookColumnId": 95,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 160,
        "id": 237,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 3,
        "PlaybookResultId": 160,
        "id": 238,
        "Action": {
          "Name": "Character Play 1",
          "IconUrl": "cp1.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "G",
          "id": 3
        }
      }]
    }]
  }, {
    "ColumnNumber": 3,
    "id": 96,
    "CharacterId": 21,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 161,
      "PlaybookColumnId": 96,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 161,
        "id": 239,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 161,
        "id": 240,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }, {
    "ColumnNumber": 4,
    "id": 97,
    "CharacterId": 21,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 162,
      "PlaybookColumnId": 97,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 162,
        "id": 241,
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
      "id": 163,
      "PlaybookColumnId": 97,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 163,
        "id": 242,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 2,
        "PlaybookResultId": 163,
        "id": 243,
        "Action": {
          "Name": "Dodge",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "<",
          "id": 2
        }
      }]
    }]
  }, {
    "ColumnNumber": 5,
    "id": 98,
    "CharacterId": 21,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 164,
      "PlaybookColumnId": 98,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 164,
        "id": 244,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 3,
        "PlaybookResultId": 164,
        "id": 245,
        "Action": {
          "Name": "Character Play 1",
          "IconUrl": "cp1.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "G",
          "id": 3
        }
      }]
    }]
  }, {
    "ColumnNumber": 6,
    "id": 99,
    "CharacterId": 21,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 165,
      "PlaybookColumnId": 99,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 9,
        "PlaybookResultId": 165,
        "id": 246,
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
      "id": 166,
      "PlaybookColumnId": 99,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 166,
        "id": 247,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 166,
        "id": 248,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 2,
        "PlaybookActionId": 1,
        "PlaybookResultId": 166,
        "id": 249,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }]
}, {
  "Name": "Compound",
  "MeleeZone": 2,
  "Jog": 5,
  "TAC": 5,
  "KickDice": 2,
  "KickLength": 6,
  "Defense": 3,
  "Armor": 1,
  "InfluenceStart": 2,
  "InfluenceMax": 4,
  "Influence" : 0,

  "IconUrl": "Compound",
  "Health": 20,
  "MaxHealth": 20,

  "IcySponge": 10,
  "Season": 1,
  "Size": 40,
  "TeamId": 4,
  "id": 22,
  "traitIds": [48, 49, 50],
  "playIds": [40, 41],
  "keywordIds": [21, 24, 7, 22, 31],
  "Sprint": "7",
  "Team": {
    "Name": "Engineers",
    "IconUrl": "assets\\Engineers.png",
    "id": 4
  },
  "Keywords": [{
    "Name": " Human",
    "id": 7
  }, {
    "Name": "Figeon",
    "id": 21
  }, {
    "Name": " Male",
    "id": 22
  }, {
    "Name": " Mechanica",
    "id": 24
  }, {
    "Name": " Goalkeeper",
    "id": 31
  }],
  "CharacterPlays": [{
    "Name": "Chemical Resist",
    "Description": "Target friendly model ignores the first poison or burning condition it receives this turn.",
    "Cost": "1",
    "Range": "4",
    "Zone": "",
    "Sustain": true,
    "OPT": true,
    "id": 40
  }, {
    "Name": "Horrific Odour",
    "Description": "While within this aura, enemy models must pay an additional [1] Influence to make a Kick.",
    "Cost": "",
    "Range": "",
    "Zone": "",
    "Sustain": false,
    "OPT": false,
    "id": 41
  }],
  "CharacterTraits": [{
    "Name": "Rush Keeper",
    "Description": "While this model is within [4”] of a friendly goal-post, when an enemy model ends an Advance within [6”] of this model and this model is not engaged, this model may immediately make a Charge targeting the enemy model. Rush Keeper may only be triggered once per turn.",
    "Stipulation": "",
    "id": 48,
    "type": "Character Trait"
  }, {
    "Name": "Noxious Death",
    "Description": "When this model suffers the taken-out condition during the Activation Phase, all other models within the pulse suffer [3] DMG and the poison condition.",
    "Stipulation": "3p",
    "id": 49,
    "type": "Character Trait"
  }, {
    "Name": "Gluttonous Mass",
    "Description": "The first time each turn this model is hit by an enemy Attack or Character Play that targets this model, except while making an Advance, the Attack or Character Play is ignored.",
    "Stipulation": "",
    "id": 50,
    "type": "Character Trait"
  }],
  "PlayBookColumns": [{
    "ColumnNumber": 1,
    "id": 100,
    "CharacterId": 22,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 167,
      "PlaybookColumnId": 100,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 7,
        "PlaybookResultId": 167,
        "id": 250,
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
    "id": 101,
    "CharacterId": 22,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 168,
      "PlaybookColumnId": 101,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 168,
        "id": 251,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 7,
        "PlaybookResultId": 168,
        "id": 252,
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
      "id": 169,
      "PlaybookColumnId": 101,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 6,
        "PlaybookResultId": 169,
        "id": 253,
        "Action": {
          "Name": "Tackle",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "T",
          "id": 6
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 169,
        "id": 254,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }, {
    "ColumnNumber": 3,
    "id": 102,
    "CharacterId": 22,
    "PlaybookResults": [{
      "Momentous": false,
      "id": 170,
      "PlaybookColumnId": 102,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 170,
        "id": 255,
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
      "id": 171,
      "PlaybookColumnId": 102,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 1,
        "PlaybookResultId": 171,
        "id": 256,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }, {
        "Order": 1,
        "PlaybookActionId": 1,
        "PlaybookResultId": 171,
        "id": 257,
        "Action": {
          "Name": "Push",
          "IconUrl": "Push.png",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": ">",
          "id": 1
        }
      }]
    }]
  }, {
    "ColumnNumber": 4,
    "id": 103,
    "CharacterId": 22,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 172,
      "PlaybookColumnId": 103,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 5,
        "PlaybookResultId": 172,
        "id": 258,
        "Action": {
          "Name": "Knock Down",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "KD",
          "id": 5
        }
      }]
    }]
  }, {
    "ColumnNumber": 5,
    "id": 104,
    "CharacterId": 22,
    "PlaybookResults": [{
      "Momentous": true,
      "id": 173,
      "PlaybookColumnId": 104,
      "PlaybookResultActions": [{
        "Order": 0,
        "PlaybookActionId": 8,
        "PlaybookResultId": 173,
        "id": 259,
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
        "PlaybookResultId": 173,
        "id": 260,
        "Action": {
          "Name": "Knock Down",
          "IconUrl": "",
          "Damage": false,
          "DamageValue": 0,
          "Abbreviation": "KD",
          "id": 5
        }
      }]
    }]
  }]
}]
