import { NextResponse } from 'next/server';


// export async function POST(req) {
//   console.log('POST/api/chat');
//   return NextResponse.json({ message: 'Hello from the server' });
// }

export async function POST(req) {
    const openai = new OpenAI();
    const data = await req.json();
    console.log(data);
    return NextResponse.json({ message: 'Hello from the server' });
  }
  