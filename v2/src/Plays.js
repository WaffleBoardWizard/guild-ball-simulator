export default [{
    Name: "Second Wind",
    Target: "TODO"
  },
  {
    Name: "Deadbolt",
    Target: "Enemy",
    Type : "Attack",
    Actions: [{
      "Name": "3 Damage",
      "Damage": true,
      "DamageValue": 3,
    },
    {
      "Name": "Push",
      "Damage": false,
      "DamageValue": 0,
    },
    {
      "Name": "Knock Down",
      "Damage": false,
      "DamageValue": 0,
    }],
  },
  {
    Name: "Minefield",
    Target: "Enemy",
    Type: "Aura",
    Auras:[
      {
        Length : 4,
        Color: "red"
      }
    ]
  },
  {
    Name: "Nimble",
    Target: "Self",
    Type: "Buff",
    Modifiers:[
      {
        Stat : "Defense",
        Value: 1
      }
    ]
  },
  {
    Name: "Acrobatic",
    Target: "Self",
    Type: "Attack",
    Actions: [
    {
      "Name": "Dodge",
      "Damage": false,
      "DamageValue": 0,
    }]
  },
  {
    Name: "Controller",
    Target: "Self",
    Type: "Buff",
    Modifiers:[
      {
        Stat : "TODO",
        Value: 1
      }
    ]
  },
  {
    Name: "Alternator",
    Target: "Friendly",
    Type: "Buff",
    Modifiers:[
      {
        Stat : "Jog",
        Value: 2
      },
      {
        Stat : "Sprint",
        Value: 2
      }
    ]
  },
  {
    Name: "Deletion",
    Target: "Self",
    Type: "Buff",
    Modifiers:[
      {
        Stat : "TODO",
        Value: 1
      }
    ]
  },
  {
    Name: "Flurry",
    Target: "Enemy",
    Type : "Attack",
    Actions: [{
      "Name": "2 Damage",
      "Damage": true,
      "DamageValue": 2,
    }]
  },
  {
    Name: "Arrow to the Knee",
    Target: "Enemy",
    Type: "Attack",
    Actions: [{
      "Name": "2 Damage",
      "Damage": true,
      "DamageValue": 2,
    }],
    Modifiers:[
      {
        Stat : "KickDice",
        Value: -2
      },
      {
        Stat : "KickLength",
        Value: -2
      }
    ]
  },
  {
    Name: "Tether Ball",
    Target: "Ball",
    Type : "Misc"
  },
   {
    Name: "Super Shot",
    Description: "This model gains [+1 / +2”] KICK.",
    Cost: [1],
    Modifiers: [{
        Stat: "KickDice",
        Value: 1,
      },
      {
        Stat: "KickLength",
        Value: 2,
      }
    ],
    OPT: true,
    Sustain: true,
    Range: "S",
    Target: "Any"
  },
  {
    Name: "Lure of Gold",
    Description: "Target other friendly Guild model may immediately make a Jog towards this model. Each model may only be moved by Lure of Gold once per turn",
    Cost: [2, "G"],
    OPT: false,
    Sustain: false,
    Range: 6,
    Target: "Friendly",
    Actions: [{
      Name: "Jog"
    }]
  },
  {
    Name: "Midas Touch",
    Description: "Target enemy model gains a burden-token. When a friendly Guild model makes an Attack against an enemy model that has a burden-token, the friendly Guild model may remove the burden-token to gain [+2] net hits.",
    Cost: [2, "G"],
    OPT: false,
    Sustain: false,
    Range: 6,
    Target: "Friendly",
    Actions: [{
      Name: "Jog"
    }]
  }
];
