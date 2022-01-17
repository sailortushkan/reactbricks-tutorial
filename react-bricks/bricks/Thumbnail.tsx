// Thumbnail.tsx
import React from 'react';
import { types, Text, RichText, Image } from 'react-bricks/frontend';

interface ThumbnailProps {
  hasShadow: boolean;
  bgColor: types.IColor;
}

const Thumbnail: types.Brick<ThumbnailProps> = ({ hasShadow, bgColor, ...rest }) => {
  return (
    <div
      {...rest}
      className={`my-6 p-6 text-center border rounded-lg ${hasShadow ? 'shadow-xl' : ''} ${bgColor?.className}`}
    >
      <Image propName="image" alt="Fallback alt tag" maxWidth={200} imageClassName="mb-6" />
      <Text
        propName="title"
        renderBlock={({ children }) => <h1 className="text-2xl font-bold">{children}</h1>}
        placeholder="Type a title..."
      />
      <RichText
        propName="description"
        renderBlock={({ children }) => <p className="text-lg text-gray-500">{children}</p>}
        placeholder="Type a description"
        allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Highlight]}
        renderHighlight={({ children }) => <span className="px-1 rounded bg-blue-200 text-blue-900">{children}</span>}
      />
    </div>
  );
};

Thumbnail.schema = {
  name: 'thumbnail',
  label: 'Thumbnail',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    title: 'Helloo, world!',
    description: 'Lorem ipsum dolor sit amet.',
    hasShadow: true,
    bgColor: { color: '#ffffff', className: 'bg-white' },
    image: {
      src: 'https://images.reactbricks.com/original/2933d3f8-fe1c-4e6f-b42b-e325ee79d131.jpeg',
      placeholderSrc: 'https://images.reactbricks.com/placeholder/2933d3f8-fe1c-4e6f-b42b-e325ee79d131.jpeg',
      srcSet:
        'https://images.reactbricks.com/src_set/2933d3f8-fe1c-4e6f-b42b-e325ee79d131-400.jpeg 400w,\nhttps://images.reactbricks.com/src_set/2933d3f8-fe1c-4e6f-b42b-e325ee79d131-300.jpeg 300w,\nhttps://images.reactbricks.com/src_set/2933d3f8-fe1c-4e6f-b42b-e325ee79d131-200.jpeg 200w,\nhttps://images.reactbricks.com/src_set/2933d3f8-fe1c-4e6f-b42b-e325ee79d131-100.jpeg 100w,\nhttps://images.reactbricks.com/src_set/2933d3f8-fe1c-4e6f-b42b-e325ee79d131-50.jpeg 50w',
      width: 800,
      height: 800,
      alt: 'Fallback alt tag',
      seoName: '',
    },
  }),
  sideEditProps: [
    {
      name: 'hasShadow',
      label: 'Shadow',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'bgColor',
      label: 'Background',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          {
            label: 'White',
            value: { color: '#ffffff', className: 'bg-white' },
          },
          {
            label: 'Light blue',
            value: { color: '#eff6ff', className: 'bg-blue-50' },
          },
        ],
      },
    },
  ],
};

export default Thumbnail;
