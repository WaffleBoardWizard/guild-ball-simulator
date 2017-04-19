export default [{
    Name: "Knocked Down",
    Abbreviation: "KD",
    Image: "KD.png",
    Modifiers: [{
        Stat: "Jog",
        Value: 0,
      },
      {
        Stat: "Sprint",
        Value: 0,
      },
      {
        Stat: "Armor",
        Value: -1,
      }
    ]
  },
  {
    Name: "Poison",
    Abbreviation: "P",
    Image: "KD.png",
    Modifiers: [],
    OnRoundFinish: [{
      Stat: "Health",
      Value: -2
    }]
  },
  {
    Name: "Bleed",
    Abbreviation: "B",
    Image: "KD.png",
    Modifiers: [],
    OnRoundFinish: [{
      Stat: "Health",
      Value: -3
    }],
    RemoveOnRoundFinish: true
  },
  {
    Name: "Snare",
    Abbreviation: "S",
    Image: "KD.png",
    Modifiers: [{
        Stat: "Jog",
        Value: -2,
      },
      {
        Stat: "Sprint",
        Value: -2,
      },
      {
        Stat: "Defense",
        Value: -1,
      }
    ]
  }
];
