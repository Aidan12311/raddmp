import path from "path";
import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";

export async function POST(request) {
    const formData = await request.formData();

    const file = formData.get("file");
    const cover = formData.get("cover");

    const isFile = (f) => f && typeof f.arrayBuffer === "function";

    if(!isFile(file) || !file.type.startsWith("audio/")) {
        return NextResponse.json({ error: "Invalid audio file! Expected common audio file formats!" }, { status: 400 });
    }

    if(cover && (!isFile(cover) || !cover.type.startsWith("image/"))) { 
        return NextResponse.json({ error: "Invalid cover file! Expected common image file formats!" }, { status: 400 });
    }

    const saveFile = async (file, folderName) => {
        const folderPath = path.join(process.cwd(), "public", folderName);
        await mkdir(folderPath, { recursive: true });

        const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
        const savedPathName = `${Date.now()}-${safeName}`;

        await writeFile(path.join(folderPath, savedPathName), Buffer.from(await file.arrayBuffer()));
        return `/${folderName}/${savedPathName}`;
    }

    const filePath = await saveFile(file, "test_music");
    const coverPath = cover && typeof cover !== "string" ? await saveFile(cover, "test_covers") : null;

    return NextResponse.json({ filePath, coverPath });
}
