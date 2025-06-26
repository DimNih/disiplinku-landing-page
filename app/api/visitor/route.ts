import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'visitor.json');

export async function GET() {
  try {
    const data = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, 'utf-8'))
      : { count: 0 };

    return NextResponse.json({ count: data.count });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read visitor data' }, { status: 500 });
  }
}

export async function POST() {
  try {
    const data = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, 'utf-8'))
      : { count: 0 };

    data.count += 1;

    fs.writeFileSync(filePath, JSON.stringify(data));

    return NextResponse.json({ count: data.count });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update visitor data' }, { status: 500 });
  }
}
