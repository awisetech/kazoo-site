
export default async (request, context) => {
  // Pass-through edge function for Netlify Visual Editor.
  return await context.next();
};
