import { Component, OnInit } from '@angular/core';
import { IData } from '../interfaces/data';
import {depData} from '../interfaces/dep_data';

@Component({
  selector: 'app-collapse-rows',
  templateUrl: './collapse-rows.component.html',
  styleUrls: ['./collapse-rows.component.css']
})
export class CollapseRowsComponent implements OnInit {
  data: IData[];
  dep_data:depData[];

  constructor() { }
  ngOnInit() {
    this.data = [
      {
        "Full_Name": "Basem Ragy Hassan",
        "CHI_Status": "Uploaded",
        "Mobile_Number": 508726679,
        "ID_Number": 253417231,
        "Adding_Date": "Dec 5,2022",
        "Classes_Network": "Basic,NW-7",
        "Dependencies":"present",
        "isExpanded":false,
        "Index":1,
      },
      {
        "Full_Name": "Shaikh Zubedi",
        "CHI_Status": "Uploaded",
        "Mobile_Number": 508726623,
        "ID_Number": 1213212312,
        "Adding_Date": "Dec 5,2022",
        "Classes_Network": "Basic,NW-7",
        "Dependencies":"present",
        "isExpanded":false,
        "Index":2,
      },
      {
        "Full_Name": "Abdullah al Killany",
        "CHI_Status": "Uploaded",
        "Mobile_Number": 508726342,
        "ID_Number": 123123123,
        "Adding_Date": "Dec 5,2022",
        "Classes_Network": "Siver ,NW-M",
        "Dependencies":"present",
        "isExpanded":false,
        "Index":3,
      },
      {
        "Full_Name": "Rania Atia al Molify",
        "CHI_Status": "Uploaded",
        "Mobile_Number": 508721123,
        "ID_Number": 1321231233,
        "Adding_Date": "Dec 5,2022",
        "Classes_Network": "Basic,NW-7",
        "Dependencies":"present",
        "isExpanded":false,
        "Index":4,
      },
      {
        "Full_Name": "Muhammed Muntaser",
        "CHI_Status": "Uploaded",
        "Mobile_Number": 508782121,
        "ID_Number": 124512312,
        "Adding_Date": "Dec 6,2022",
        "Classes_Network": "Siver ,NW-M",
        "Dependencies":"present",
        "isExpanded":false,
        "Index":5,
      },
      {
        "Full_Name": "Mutaib al ataiby",
        "CHI_Status": "Uploaded",
        "Mobile_Number": 587845112,
        "ID_Number": 1223124,
        "Adding_Date": "Dec 6,2022",
        "Classes_Network": "Basic,NW-7",
        "Dependencies":"present",
        "isExpanded":false,
        "Index":6,
      },
      {
        "Full_Name": "Tarek Basher",
        "CHI_Status": "Uploaded",
        "Mobile_Number": 587845112,
        "ID_Number": 11231232,
        "Adding_Date": "Dec 6,2022",
        "Classes_Network": "Basic,NW-7",
        "Dependencies":"not present",
        "isExpanded":false,
        "Index":7,
      },
    ];

    this.data.forEach((_data) => {
      _data.isExpanded = false;
    });

    this.dep_data=[
      {
        "Full_Name": "Abdullah Shaik Zubedi",
        "CHI_Status": "Uploaded",
        "ID_Number": 253417232,
        "Relation": "Son",
        "Gender": "Male ",
        "Index":1,
      },
      {
        "Full_Name": "Shaimaa Shaik Zubedi",
        "CHI_Status": "Uploaded",
        "ID_Number": 253417233,
        "Relation": "Daughter",
        "Gender": "Female ",
        "Index":1,
      },
      {
        "Full_Name": "Hasna Khaled Saleh Zubedi",
        "CHI_Status": "Uploaded",
        "ID_Number": 253417234,
        "Relation": "Wife",
        "Gender": "Female ",
        "Index":1,
      },
      {
        "Full_Name": "Abdullah Shaik Zubedi",
        "CHI_Status": "Uploaded",
        "ID_Number": 253417232,
        "Relation": "Son",
        "Gender": "Male ",
        "Index":2,
      },
      {
        "Full_Name": "Shaimaa Shaik Zubedi",
        "CHI_Status": "Uploaded",
        "ID_Number": 253417233,
        "Relation": "Daughter",
        "Gender": "Female ",
        "Index":2,
      },

      
      {
        "Full_Name": "Shaimaa Shaik Zubedi",
        "CHI_Status": "Uploaded",
        "ID_Number": 253417233,
        "Relation": "Daughter",
        "Gender": "Female ",
        "Index":3,
      },
      {
        "Full_Name": "Hasna Khaled Saleh Zubedi",
        "CHI_Status": "Uploaded",
        "ID_Number": 253417234,
        "Relation": "Wife",
        "Gender": "Female ",
        "Index":3,
      },
      {
        "Full_Name": "Mummy Shaik Zubedi",
        "CHI_Status": "Uploaded",
        "ID_Number": 253417232,
        "Relation": "Mother",
        "Gender": "Male ",
        "Index":3,
      },
      {
        "Full_Name": "Shaimaa Shaik Zubedi",
        "CHI_Status": "Uploaded",
        "ID_Number": 253417233,
        "Relation": "Daughter",
        "Gender": "Female ",
        "Index":4,
      },
      {
        "Full_Name": "Hasna Khaled Saleh Zubedi",
        "CHI_Status": "Uploaded",
        "ID_Number": 253417234,
        "Relation": "Wife",
        "Gender": "Female ",
        "Index":4,
      },
      {
        "Full_Name": "Abdullah Shaik Zubedi",
        "CHI_Status": "Uploaded",
        "ID_Number": 253417232,
        "Relation": "Son",
        "Gender": "Male ",
        "Index":5,
      },
      {
        "Full_Name": "Shaimaa Shaik Zubedi",
        "CHI_Status": "Uploaded",
        "ID_Number": 253417233,
        "Relation": "Daughter",
        "Gender": "Female ",
        "Index":5,
      },
      {
        "Full_Name": "Hasna Khaled Saleh Zubedi",
        "CHI_Status": "Uploaded",
        "ID_Number": 253417234,
        "Relation": "Wife",
        "Gender": "Female ",
        "Index":5,
      },
      {
        "Full_Name": "Abdullah Shaik Zubedi",
        "CHI_Status": "Uploaded",
        "ID_Number": 253417232,
        "Relation": "Son",
        "Gender": "Male ",
        "Index":6,
      },
      {
        "Full_Name": "Shaimaa Shaik Zubedi",
        "CHI_Status": "Uploaded",
        "ID_Number": 253417233,
        "Relation": "Daughter",
        "Gender": "Female ",
        "Index":6,
      },
      {
        "Full_Name": "Hasna Khaled Saleh Zubedi",
        "CHI_Status": "Uploaded",
        "ID_Number": 253417234,
        "Relation": "Wife",
        "Gender": "Female ",
        "Index":6,
      },
      
    ];
    
  }

  selectItemCoverages(index:Number, isExpanded:Number ) {
    for (let row of this.data){
      if(row.Index==index)
      {
        row.isExpanded= !row.isExpanded;
      }
    } 
  }

  searchText='';
}
