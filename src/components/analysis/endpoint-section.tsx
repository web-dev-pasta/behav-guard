import EndpointAccess from "./endpoint-access";
import ParameterVariations from "./parameter-variations";

function EndpointSection() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <EndpointAccess />
      <ParameterVariations />
    </div>
  );
}

export default EndpointSection;
