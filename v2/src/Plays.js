export default [{
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
