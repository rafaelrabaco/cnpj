const { expect } = require("chai");
import { CNPJ } from "./../src/lib";

describe("test/ConsultaCNPJTest", function() 
{
    describe("Info", () => 
    {
        it("Should get information without problems", done => 
        {
            CNPJ.info("27865757000102")
                .then(response => 
                {
                    expect(response).to.have.property("atividade_principal");
                    expect(response).to.have.property("nome");
                })
                .then(() => done());
        });

        it("Should get information with token without problems", done => 
        {
            let options = { token: "AWDHI29H09HHA2", timeout: 4000 };
            CNPJ.info("27865757000102", options)
                .then(response => 
                {
                    expect(response).to.have.property("atividade_principal");
                    expect(response).to.have.property("nome");
                })
                .then(() => done());
        });

        it("Should get error if CNPJ is invalid", done => 
        {
            CNPJ.info("27865757000202")
                .then(response => 
                {
                    expect(response).to.have.property("message");
                })
                .then(() => done());
        });
    });

    describe("Validate", () => 
    {
        it("Should validate", () => 
        {
            expect(CNPJ.validate("56.112.478/0001-68")).to.be.true;
            expect(CNPJ.validate("22.480.042/0001-00")).to.be.true;
            expect(CNPJ.validate("22.480.042/0001-00")).to.be.true;
        });

        it("Should get error on validate", () => 
        {
            expect(CNPJ.validate("12.033.793/0001-12")).to.be.false;
            expect(CNPJ.validate("32.033.587/0001-28")).to.be.false;
            expect(CNPJ.validate("00.000.000/0000-00")).to.be.false;
            expect(CNPJ.validate("11.111.111/1111-11")).to.be.false;
            expect(CNPJ.validate("22.222.222/2222-22")).to.be.false;
            expect(CNPJ.validate("33.333.333/3333-33")).to.be.false;
            expect(CNPJ.validate("44.444.444/4444-44")).to.be.false;
            expect(CNPJ.validate("55.555.555/5555-55")).to.be.false;
            expect(CNPJ.validate("66.666.666/6666-66")).to.be.false;
            expect(CNPJ.validate("77.777.777/7777-77")).to.be.false;
            expect(CNPJ.validate("88.888.888/8888-88")).to.be.false;
            expect(CNPJ.validate("99.999.999/9999-99")).to.be.false;
            expect(CNPJ.validate("22.222.222/2222-2")).to.be.false;
        });
    });

    describe("Clear", () => 
    {
        it("Should clear", () => 
        {
            expect(CNPJ.clear("43.236.279/0001-10")).to.be.equal("43236279000110");
        });
    });

    describe("Format", () => 
    {
        it("Should format", () => 
        {
            expect(CNPJ.format("43236279000110")).to.be.equal("43.236.279/0001-10");
        });
    });
});
