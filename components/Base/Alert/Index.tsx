type Alert = {
    severity: string,
    children?: React.ReactNode
}

export default function Alert<Alert>({ severity, children }){
    if (severity === "error") {
      return (
        <div className="bg-red-200 rounded-lg px-4 py-2">
          <p className="text-red-900 font-semibold text-center">{children}</p>
        </div>
      );
    }
    if (severity === "success") {
        return (
          <div className="bg-green-200 rounded-lg px-4 py-2">
            <p className="text-green-900 font-semibold text-center">{children}</p>
          </div>
        );
      }

}