export const storybookStoryDecorator = (story) => {
  return (
    <div className="app-container">
      <div className="app-card max-w-md">{story()}</div>
    </div>
  );
};
