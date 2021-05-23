import React from 'react'
import {Table} from 'antd'
import 'antd/dist/antd.css';


class Tables extends React.Component{

    constructor(props){
        super(props)
        this.state={
            data:[
                {
                  key:1,
                  b_name:"Pride and Prejudice",
                  book_cover:"https://i.pinimg.com/originals/14/d8/ea/14d8ea37846191d498ed5200bb560524.jpg",
                  a_name:"Jane Auston",
                  publisher:"Whitehall Publications",
                  year:1813,
                  genre:'Classic Regency',
                  series:3,
                  copies_sold:'20 million'

                },
                {
                  key:2,
                  key:1,
                  b_name:"The Famous Five",
                  book_cover:"https://worldofblyton.files.wordpress.com/2018/11/five-have-plenty-of-fun-25.jpg?w=520&h=798",
                  a_name:"Enid Blyton",
                  publisher:"Hodder House",
                  year:1942,
                  genre:'Adventure',
                  series:21,
                  copies_sold:'10 million'

                },
                {
                  key:3,
                  b_name:"Charlie and the Chocolate Factory",
                  book_cover:"https://i.pinimg.com/originals/c7/b0/27/c7b0277bd4aa1007aac3b001d6780e95.jpg",
                  a_name:"Roald Dahl",
                  publisher:"Whitehall Publications",
                  year:1979,
                  genre:'Fantasy',
                  series:1,
                  copies_sold:'6 million'

                },
                {
                  key:4,
                  b_name:"The Da Vinci Code",
                  book_cover:"https://images-na.ssl-images-amazon.com/images/I/51nTKunde0L._SX319_BO1,204,203,200_.jpg",
                  a_name:"Dan Brown",
                  publisher:"DoubleDay Publications",
                  year:2003,
                  genre:'Detective Fiction',
                  series:5,
                  copies_sold:'80 million'
                },
                {
                  key:5,
                  b_name:"Heart and Home",
                  book_cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1440193450l/25863004.jpg",
                  a_name:"Lyn Andrews",
                  publisher:"The Headgroup Publication House",
                  year:2015,
                  genre:'Fiction',
                  series:1,
                  copies_sold:'8 million'
                },
                {
                  key:6,
                  b_name:"The Girl on the Train",
                  book_cover:"https://images-na.ssl-images-amazon.com/images/I/41fMCU2vRPL._SX326_BO1,204,203,200_.jpg",
                  a_name:"Paula Hawkins",
                  publisher:"Riverhead Publications",
                  year:2015,
                  genre:'Thriller',
                  series:1,
                  copies_sold:'15 million'
                
                },
                {
                  key:7,
                  b_name:"Everyone has a Story",
               
                  book_cover:"https://images-na.ssl-images-amazon.com/images/I/51oEl54Vm9L._SX323_BO1,204,203,200_.jpg",
                  a_name:"Savi Sharma",
                  publisher:"Westland Publications",
                  year:2015,
                  genre:'Contemporary Fiction',
                  series:2,
                  copies_sold:'5 million'
                },
                {
                  key:8,
                  b_name:"The Silent Patient",
                  book_cover:"https://upload.wikimedia.org/wikipedia/en/d/df/The_Silent_Patient_early_2019_UK_edition.png",
                  a_name:"Alex Michaelides",
                  publisher:"Celadon Books",
                  year:2019,
                  genre:'Mystery',
                  series:1,
                  copies_sold:'3 million'
                }
              ],
            
              columns:[
                {
                  title:<div style={{color:"red"}}><b>BOOK NAME</b></div>,
                  dataIndex:'b_name',
                  key:'key',
                  render:(text,b_name)=>{
                      return <div><img src={b_name.book_cover}  style={{marginRight:"5px" , width:"90px", height:"140px" }} /><b>{b_name.b_name}</b></div>
                  }
                  
                },
                {
                  title:<div style={{color:"gold"}}><b>AUTHOR NAME</b></div>,
                  dataIndex:'a_name',
                  key:'key',
                  render:(text)=>{
                      return <b>{text}</b>
                  }
                },
                {
                  title:<div style={{color:"blue"}}><b>PUBLISHER /PUBLICATION HOUSE</b></div>,
                  dataIndex:'publisher',
                  key:'key',
                  render:(text)=>{
                    return <b>{text}</b>
                  }
                },
                {
                  title:<div style={{color:"brown"}}><b>YEAR OF RELEASE</b></div>,
                  dataIndex:'year',
                  key:'key',
                 
                  render:(text)=>{
                    return <b>{text}</b>
                  }
                },
                {
                  title:<div style={{color:"orange"}}><b>GENRE</b></div>,
                  dataIndex:'genre',
                  key:'key',
                  render:(text)=>{
                    return <b>{text}</b>
                  }
                },
                {
                  title:<div style={{color:"teal"}}><b>NO OF EDITIONS</b></div>,
                  dataIndex:'series',
                  key:'key',
                  sorter: (a, b) => b.series - a.series,
                  render:(text)=>{
                    return <b>{text}</b>
                  }
                },
                {
                    title:<div style={{color:"orange"}}><b>COPIES SOLD</b></div>,
                    dataIndex:'copies_sold',
                    key:'key',
                    render:(text)=>{
                      return <b>{text}</b>
                    }
                },
                {
                  title:'Century',
                  key:'key',
                  render:payload =>{
                    return <p>{payload.year>2000?'21th century':'20th century'}</p>
                  }

                },
              ]
        }
    }

    
    
    render(){
        const {columns,data}=this.state;
        return(
          <div>
          <h3 style={{color:"red",fontSize:"30px",paddingLeft:"325px",marginTop:"5px",marginBottom:"30px"}}><u>MY FAVORITE COLLECTION OF BOOKS</u> </h3>
            <Table 
                columns={columns}
                dataSource={data}
                pagination={false}
              
            />
            </div> 
            
        )
    }
}

export default Tables