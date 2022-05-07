export const responseFilters = {
  general: {
    title: null,
    data: [
      {
        id: "1",
        name: "Size",
        selectedNos: null,
        filters: [
          {
            name: "3XS",
            isSelected: false,
            numbersAvailable: 65,
          },
          {
            name: "XXS",
            isSelected: false,
            numbersAvailable: 204,
          },
          {
            name: "XS",
            isSelected: false,
            numbersAvailable: 9242,
          },
          {
            name: "XS/S",
            isSelected: false,
            numbersAvailable: 7,
          },
        ],
      },
      {
        id: "2",
        name: "Color",
        selectedNos: null,
        filters: [
          {
            name: "Blue",
            hexCode: "#0000FF",
            isSelected: false,
            numbersAvailable: 72077,
          },
          {
            name: "Red",
            hexCode: "#FF0000",
            isSelected: false,
            numbersAvailable: 2044,
          },
          {
            name: "Green",
            hexCode: "#00FF00",
            isSelected: false,
            numbersAvailable: 681,
          },
        ],
      },
    ],
  },
  specific: {
      title :"Shirts",
      data :[
          {
              id :'ghtsusbbax',
              name : 'Pattern',
              selectedNos: null,
              filters:[{
                  name :'Solid',
                  isSelected:false ,
                  selectedNos: 17724
              },
              {
                name :'Checked',
                isSelected:false ,
                selectedNos: 17515
            },
            {
                name :'Printed',
                isSelected:false ,
                selectedNos: 15865
            },
            ]
          },
          {
            id :'hhuhubhv',
            name : 'Sleeve Length',
            selectedNos: null,
            filters:[{
                name :'Long Sleeves',
                isSelected:false ,
                selectedNos: 52043
            },
            {
              name :'Short Sleeves',
              isSelected:false ,
              selectedNos: 8704
          },
          {
              name :'Sleeveless',
              isSelected:false ,
              selectedNos: 15
          },
          ]
        }
      ]
  },
};
