import Button from '../components/Button';
import CodeSnippet from '../components/CodeSnippet';

const buttonCode = `
const Button = () => (
  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
    Button Component
  </button>
);
`;

export default function Test() {
  return (
    <div>
      <h1 className="text-xl font-bold">Component Preview</h1>
      <div className="my-8">
        <h2 className="mb-4">Button Component</h2>
        <Button />
      </div>
      <CodeSnippet code={buttonCode} />
    </div>
  );
}