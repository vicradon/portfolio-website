const { Client } = require("@notionhq/client");

export default async function handler(req, res) {
  const notion = new Client({ auth: process.env.NOTION_KEY });
  const blockId = process.env.NOTION_DATABASE_ID;

  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 100,
  });

  res.status(200).json({ success: true, response });
}
