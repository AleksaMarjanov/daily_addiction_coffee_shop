export default {
    name:'events',
    title:'Events',
    type: 'document',
    fields:[
        { 
            name:'name',
            title:'Name',
            type: 'string'
        },
        {
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },  
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name: 'tags',
            title: 'Tags',
           type:'array',
           of: [
             {
               name:'tag',
               title:'Tag',
               type:'string'
             }
           ]
          },
    ]
}