const TypingIndicator = () => {
  return (
    <div className="flex gap-1 items-center">
      <span className="bg-foreground w-2 h-2 rounded-full animate-bounce" />
      <span className="bg-foreground w-2 h-2 rounded-full animate-bounce delay-100" />
      <span className="bg-foreground w-2 h-2 rounded-full animate-bounce delay-200" />
    </div>
  );
};

export default TypingIndicator;
