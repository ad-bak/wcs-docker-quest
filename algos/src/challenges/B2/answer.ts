/**
 * In this challenge, you have to get all the images sent in a conversation (list of messages).
 * Images must be sorted by message datetime they are attached to (recents first, if datetimes are the same, should be sorted by content length).
 * You should not display duplicates. If duplicates are found, the recent one should be kept.
 * This algo is useful to create a medias gallery in a conversation app (such as in WhatsApp conversations)
 *
 * @param messages List of messages with their images
 * @returns All existing images sorted by their parent datetimes (recent first), without duplicates
 */

// ↓ uncomment bellow lines and add your response!
export default function ({
  messages,
}: {
  messages: MessageWithImages[];
}): string[] {
  const images: string[] = [];
  messages
    .sort((a, b) => {
      if (a.sentAt === b.sentAt) {
        return a.content.length - b.content.length;
      } else {
        return a.sentAt.localeCompare(b.sentAt);
      }
    })
    .forEach((message) => {
      message.images.forEach((image) => {
        if (!images.includes(image)) {
          images.push(image);
        }
      });
    });
  return images;
}

// used interfaces, do not touch
export interface MessageWithImages {
  sentBy: string;
  content: string;
  images: string[];
  sentAt: string;
}
