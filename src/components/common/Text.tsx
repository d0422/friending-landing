export const Text = ({ children }: { children: string }) => {
  return (
    <div className="text-[#ffffff] text-[4vw] flex justify-center">
      {children}
    </div>
  );
};
