// app/api/music/[id]/route.js
export async function GET(request, { params }) {
    const { id } = params;
  
    const musicItems = {
      'item1': { id: 'item1', title: 'Music Item 1', description: 'Description for music item 1', price: '19.99' , src: '/images/demo1.jpg'},
      'item2': { id: 'item2', title: 'Music Item 2', description: 'Description for music item 2', price: '29.99' , src: '/images/demo2.jpg'},
      'item3': { id: 'item3', title: 'Music Item 3', description: 'Description for music item 3', price: '39.99' , src: '/images/demo3.jpg'},
    };
  
    const musicItem = musicItems[id];
    
    if (musicItem) {
      return new Response(JSON.stringify(musicItem), { status: 200 });
    } else {
      return new Response(JSON.stringify({ message: 'Music item not found' }), { status: 404 });
    }
  }
  