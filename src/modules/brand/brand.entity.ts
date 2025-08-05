import {
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'brand',
  timestamps: true,
})
export class Brand extends Model<Brand> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  public brand_id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  describe: string;
}
