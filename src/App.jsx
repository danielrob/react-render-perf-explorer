import { AppScreen, AppComplexitySettings } from 'screens';

function App() {
  return (
    <div className="flex absolute top-0 bottom-0 left-0 right-0">
      <section className="flex-1 p-5">
        <AppScreen />
      </section>
      <section className="flex-1 p-5 border-l-slate-700 border-l-2">
        <AppComplexitySettings />
      </section>
    </div>
  );
}

export default App;
