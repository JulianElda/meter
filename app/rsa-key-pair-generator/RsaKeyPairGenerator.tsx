import { PageHeader } from "@/src/components/PageHeader";
import { arrowsRotateSvg } from "@/src/components/svg/arrows-rotate";
import { Card, InputButton } from "@julianelda/scratchpad";
import { pki } from "node-forge";
import { useCallback, useEffect, useState } from "react";

export function RsaKeyPairGenerator() {
  const [bits, setBits] = useState<number>(2048);
  const [publicKey, setPublicKey] = useState<string>("");
  const [privateKey, setPrivateKey] = useState<string>("");

  const generateKey = useCallback(() => {
    pki.rsa.generateKeyPair({ bits: bits }, (_err, keypair) => {
      setPublicKey(pki.publicKeyToPem(keypair.publicKey));
      setPrivateKey(pki.privateKeyToPem(keypair.privateKey));
    });
  }, [bits]);

  useEffect(() => {
    generateKey();
  }, [generateKey]);

  return (
    <>
      <div>
        <PageHeader title="RSA key pair generator" />
      </div>
      <Card>
        <InputButton
          id="rsa-bits"
          type="number"
          label="Bits"
          value={bits}
          onChange={(value) => setBits(value as number)}
          icon={arrowsRotateSvg}
          buttonAriaLabel="Re-generate"
          onButtonClick={() => generateKey()}
        />
      </Card>
      <Card>
        <pre className="w-full font-mono break-words text-sm">{publicKey}</pre>
      </Card>
      <Card>
        <pre className="w-full font-mono break-words text-sm">{privateKey}</pre>
      </Card>
    </>
  );
}
