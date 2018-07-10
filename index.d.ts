export namespace CNPJ {
  /**
   * Get information from CNPJ
   *
   * @param cnpj
   * @param options
   */
  export function info(cnpj: string, options?: object): object;

  /**
   * Checks if the CNPJ is valid
   *
   * @param cnpj
   */
  export function validate(cnpj: string): boolean;

  /**
   * Format the CNPJ
   *
   * @param cnpj
   */
  export function format(cnpj: string): string;

  /**
   * Removes all special characters from CNPJ
   *
   * @param cnpj
   */
  export function clear(cnpj: string): string;
}
